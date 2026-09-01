// ==============================================================
// GŁÓWNY EKRAN ROZGRYWKI
// ==============================================================
// Fazy jednej tury:
//   1. draw     – gracz klika "Losuj zadanie"
//   2. rolling  – animacja losowania
//   3. blurred  – zadanie zamazane; pytanie CZY chce utrudnienie
//                 (decyzja PRZED odczytaniem treści!)
//   4. reveal   – odslonięcie zadania (+ ewentualne utrudnienie)
//   5. timer    – opcjonalny odliczacz
//   6. result   – ocena: Wykonane/Częściowo/Niewykonane × z/bez utrudnienia
// ==============================================================

import gameState from '../game-state.js';
import { tasks, undressingTasks, stageNames, stageConfig, challengeModifiers as modifiers, scoring, bodyAreas, femaleClothingItems, maleClothingItems, activityItems } from '../data.js';
import { Feedback } from '../audio.js';

// ---- Zmienne lokalne do cyklu życia gry ----
let turnPhase = 'draw';
let currentTask = null;
let chosenModifier = null;   // null = nie wzięto, obiekt = wzięto
let timerInterval = null;
let timerRemaining = 0;

// ==============================================================
// FILTROWANIE ZADAŃ – NAJWAŻNIEJSZA MECHANIKA
// ==============================================================
function isTaskAvailable(task, player) {
  // 1. Zgodność płci (musi pasować 'both' lub płeć gracza)
  if (task.gender !== 'both' && task.gender !== player) return false;

  // 2. Już użyte?
  if (gameState.usedTaskIds.has(task.id)) return false;

  // 3. Tryb hardcore
  if (task.isHardcore && !gameState.isHardcore) return false;

  const activities = gameState.getPlayerActivities(player);
  const clothing = gameState.getPlayerClothing(player);

  // 2. Wymaga czynności – gracz musi mieć WSZYSTKIE
  if (task.requiresActivities && task.requiresActivities.length > 0) {
    for (const act of task.requiresActivities) {
      if (!activities.includes(act)) return false;
    }
  }

  // 3. Wymaga ubrania (np. żeby je ściągnąć) – gracz MUSI je mieć
  if (task.requiresClothing && task.requiresClothing.length > 0) {
    for (const c of task.requiresClothing) {
      if (!clothing.has(c)) return false;
    }
  }

  // 4. Wymaga BRAKU ubrania (np. zadanie na nagie ciało)
  if (task.requiresNoClothing && task.requiresNoClothing.length > 0) {
    for (const c of task.requiresNoClothing) {
      if (clothing.has(c)) return false; // gracz nadal to ma → zadanie niedostępne
    }
  }

  // 5. Wymaga akcesoriów
  if (task.requiresAccessories && task.requiresAccessories.length > 0) {
    for (const acc of task.requiresAccessories) {
      if (!gameState.accessories.includes(acc)) return false;
    }
  }

  return true;
}

function getAvailableTasks(stageIndex, player) {
  const targetStage = stageIndex === 4 ? 5 : stageIndex + 1;
  return tasks.filter(t => t.stage === targetStage && isTaskAvailable(t, player));
}

function pickRandomTask(stageIndex, player) {
  let available = getAvailableTasks(stageIndex, player);

  if (available.length === 0) {
    // Fallback: szukaj w DOWOLNYM etapie
    available = tasks.filter(t => isTaskAvailable(t, player));
  }
  if (available.length === 0) {
    // Ultra fallback: resetuj użyte
    gameState.usedTaskIds.clear();
    available = tasks.filter(t => isTaskAvailable(t, player));
  }
  if (available.length === 0) {
    // Absolutny fallback: zadanie uniwersalne
    return {
      id: 'fallback_' + Date.now(), text: 'Przytulcie się mocno i powiedźcie sobie coś miłego ❤️',
      category: 'romantic', stage: stageIndex + 1, timed: false, target: 'both',
      requiresActivities: [], requiresClothing: [], requiresNoClothing: [], removesClothing: [], requiresAccessories: []
    };
  }
  const task = available[Math.floor(Math.random() * available.length)];
  return task;
}

function pickUndressingTask(stripsTarget) {
  const activePlayer = gameState.currentPlayer;
  const targetClothing = gameState.getPlayerClothing(stripsTarget);
  const activeClothing  = gameState.getPlayerClothing(activePlayer);

  // Fallback gdy obie osoby są już nagie
  if (targetClothing.size === 0 && activeClothing.size === 0) {
    return {
      id: 'all_naked',
      text: 'Byliście na tyle szybcy, że nie macie już ubrań! Wykorzystaj to: przytul się do partnera całym, nagim ciałem na 20 sekund.',
      category: 'hot', isUndressing: true, stripsTarget
    };
  }

  // Fallback gdy cel jest już nagi, ale aktywny nie
  if (targetClothing.size === 0) {
    return {
      id: 'target_naked',
      text: `${stripsTarget === 'female' ? 'Ona jest już bez ubrań' : 'On jest już bez ubrań'} – uczcij to! Pieść powoli jej/jego nagie ciało przez 30 sekund.`,
      category: 'hot', isUndressing: true, stripsTarget
    };
  }

  // Ustal jakiego removesClothingFrom potrzebujemy:
  // jeśli cel (stripsTarget) == aktywny gracz → 'self' (aktywny zdejmuje siebie)
  // jeśli cel != aktywny gracz             → 'partner' (aktywny zdejmuje partnera)
  const neededFrom = stripsTarget === activePlayer ? 'self' : 'partner';

  let available = undressingTasks.filter(t =>
    t.stripsTarget === stripsTarget && t.removesClothingFrom === neededFrom
  );
  if (available.length === 0) {
    // Fallback: dowolne zadanie dla tego stripsTarget
    available = undressingTasks.filter(t => t.stripsTarget === stripsTarget);
  }
  if (available.length === 0) available = undressingTasks; // ostateczny fallback

  return available[Math.floor(Math.random() * available.length)];
}

function pickRandomModifier() {
  return { ...modifiers[Math.floor(Math.random() * modifiers.length)] };
}

// ---- Helpers ----
function getCurrentPlayerName() {
  return gameState.currentPlayer === 'female' ? gameState.femaleName : gameState.maleName;
}

function getCategoryLabel(cat) {
  const m = { romantic: '💕 Romantyczne', touch: '✋ Dotyk', fun: '🎉 Zabawa', challenge: '🎯 Wyzwanie', hot: '🔥 Hot' };
  return m[cat] || '🎮 Zadanie';
}

function getObstaclesHtml(task, activePlayer) {
  if (!task.targetArea || !bodyAreas[task.targetArea]) return '';
  
  const passivePlayer = activePlayer === 'female' ? 'male' : 'female';
  const passiveClothing = gameState.getPlayerClothing(passivePlayer);
  const blockingIds = bodyAreas[task.targetArea];
  
  const obstacles = [];
  const allClothingItems = passivePlayer === 'female' ? femaleClothingItems : maleClothingItems;
  
  for (const id of blockingIds) {
    if (passiveClothing.has(id)) {
      const itemDef = allClothingItems.find(c => c.id === id);
      if (itemDef) obstacles.push(itemDef.label.toLowerCase());
    }
  }
  
  if (obstacles.length === 0) return '';
  
  return `
    <div style="margin-top: 16px; padding: 12px; background: rgba(255, 255, 255, 0.05); border-left: 3px solid var(--accent-rose); border-radius: 4px; font-size: 13px; color: var(--text-secondary);">
      <div style="font-weight: 600; margin-bottom: 4px; color: #fff;">👕 Ubrania na drodze:</div>
      Zanim zaczniesz, utoruj sobie drogę (odsuń, zdejmij na chwilę lub podciągnij): <strong style="color: var(--accent-rose);">${obstacles.join(', ')}</strong>.
    </div>
  `;
}

// ==============================================================
// RENDER
// ==============================================================

// Losuje 2 RÓŻNE indeksy dla slotów rozbierankowych w etapie
function pickTwoUndressIndices(totalSlots) {
  const idx1 = Math.floor(Math.random() * totalSlots);
  let idx2;
  do { idx2 = Math.floor(Math.random() * totalSlots); } while (idx2 === idx1);
  // Mniejszy index = slot dla female, większy = slot dla male (lub losowo)
  return Math.random() < 0.5
    ? { female: idx1, male: idx2 }
    : { female: idx2, male: idx1 };
}

export function renderGameScreen(container, onGameEnd) {

  if (gameState.currentPhase !== 'game') {
    gameState.currentPhase = 'game';
    gameState.save();
  }

  // Odświeżenie przy starcie nowej gry
  if (gameState.currentStage === 0 && gameState.currentTaskInStage === 0 && gameState.usedTaskIds.size === 0) {
      gameState.initClothingState();
      
      const config = stageConfig[gameState.gameLength];
      const initialTotal = config[0] + 2; // +2 → dwa rozbierankowe
      const { female: uf, male: um } = pickTwoUndressIndices(initialTotal);
      gameState.stageUndressIndexFemale = uf;
      gameState.stageUndressIndexMale   = um;
      gameState.midGameUnlockShownForStage = -1;
      gameState.save();
  }

  turnPhase = 'draw';

  // Start z bannerem TYLKO na samym początku
  if (gameState.currentStage === 0 && gameState.currentTaskInStage === 0) {
    showStageBanner(container, 0, () => render());
  } else {
    render();
  }

  function render() {
    const config = stageConfig[gameState.gameLength];
    const totalInStage = config[gameState.currentStage] + 2; // +2 za dwa rozbierankowe
    const stageName = stageNames[gameState.currentStage];
    const playerName = getCurrentPlayerName();
    const gender = gameState.currentPlayer;
    const indicatorClass = gender === 'female' ? 'female' : 'male';
    const indicatorEmoji = gender === 'female' ? '👩' : '👨';
    const taskNum = gameState.currentTaskInStage + 1;

    const headerBar = `
      <div class="game-header">
        <div class="score-display">
          <div class="score-player female-score">
            <span class="score-name">${gameState.femaleName}</span>
            <span class="score-value">${gameState.femaleScore}</span>
          </div>
          <div class="score-vs">VS</div>
          <div class="score-player male-score">
            <span class="score-name">${gameState.maleName}</span>
            <span class="score-value">${gameState.maleScore}</span>
          </div>
        </div>
        <div class="stage-banner">${stageName}</div>
        <div class="task-progress">Zadanie ${taskNum} z ${totalInStage}</div>
      </div>
    `;

    let content = '';

    // ============ FAZA: LOSOWANIE ============
    if (turnPhase === 'draw') {
      const isUndressSlot = (gameState.currentTaskInStage === gameState.stageUndressIndexFemale) ||
                            (gameState.currentTaskInStage === gameState.stageUndressIndexMale);

      // Sprawdzenie czy w ogóle mamy jakieś zadania na ten etap
      const targetStage = gameState.currentStage + 1;
      const normalAvailable = tasks.filter(t => t.stage === targetStage && isTaskAvailable(t, gender));

      // Jeśli nie ma normalnych zadań, a to nie jest slot rozbierankowy
      // ORAZ nie pokazywaliśmy jeszcze popupu dla tego etapu:
      if (!isUndressSlot && normalAvailable.length === 0 && gameState.midGameUnlockShownForStage < gameState.currentStage) {
        showUnlockActivitiesPopup();
        return; // przerywamy normalny render
      }

      content = `
        ${headerBar}
        <div class="game-center">
          <div class="player-indicator ${indicatorClass}">${indicatorEmoji} Kolej: ${playerName}</div>
          <div class="task-card-placeholder">
            <div class="card-mystery">?</div>
            <p style="color:var(--text-secondary); margin-top:12px;">Kliknij aby wylosować zadanie</p>
          </div>
          <button class="btn btn-primary btn-block" id="btn-draw">
            <span class="icon">🎲</span> Losuj zadanie
          </button>
        </div>
      `;

      // ============ FAZA: ANIMACJA LOSOWANIA ============
    } else if (turnPhase === 'rolling') {
      content = `
        ${headerBar}
        <div class="game-center">
          <div class="rolling-animation">
            <div class="rolling-card" id="rolling-card">
              <div class="rolling-icon">🎲</div>
            </div>
            <p class="rolling-text">Losuję zadanie...</p>
          </div>
        </div>
      `;

      // ============ FAZA: ZAMAZANE + PYTANIE O UTRUDNIENIE ============
    } else if (turnPhase === 'blurred') {
      const mod = pickRandomModifier();
      // Zapisz wylosowany modyfikator do późniejszego użycia
      container._pendingModifier = mod;

      content = `
        ${headerBar}
        <div class="game-center">
          <div class="task-card blurred-card">
            <div class="task-card-text blurred-text">${currentTask.text}</div>
            ${currentTask.timed ? `<div class="task-timer-badge blurred-text">⏱️ ${currentTask.timeLimit}s</div>` : ''}
          </div>

          <div class="modifier-section glass-panel" style="margin-top:20px; text-align:center;">
            <p style="font-size:14px; color:var(--text-secondary); margin-bottom:8px;">Zanim odkryjesz treść:</p>
            <p style="font-size:16px; font-weight:700; margin-bottom:14px;">Chcesz dodatkowe utrudnienie?</p>
            <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Nie wiesz jeszcze co to za zadanie. Utrudnienie zostanie wylosowane i nie można go odrzucić!</p>
            <div style="display:flex; gap:10px;">
              <button class="btn btn-secondary" id="btn-no-mod" style="flex:1;">Nie, odkryj tak</button>
              <button class="btn btn-primary" id="btn-yes-mod" style="flex:1;">
                <span class="icon">🔥</span> Biorę!
              </button>
            </div>
          </div>
        </div>
      `;

      // ============ FAZA: ODKRYCIE ============
    } else if (turnPhase === 'reveal') {
      const modBadge = chosenModifier
        ? `<div class="modifier-badge"><span class="icon">${chosenModifier.emoji}</span> ${chosenModifier.label} (+${chosenModifier.bonusPoints} pkt)</div>`
        : '';
        
      const obstaclesHtml = getObstaclesHtml(currentTask, gameState.currentPlayer);

      content = `
        ${headerBar}
        <div class="game-center">
          <div class="task-card revealed-card ${currentTask.isUndressing ? 'undressing-card' : ''}">
            <div class="task-card-category ${currentTask.isUndressing ? 'undressing-badge' : ''}">
              ${currentTask.isUndressing ? '✨ ZADANIE SPECJALNE: ROZBIERANKO' : getCategoryLabel(currentTask.category)}
            </div>
            <div class="task-card-text">${currentTask.text}</div>
            ${obstaclesHtml}
            ${modBadge}
            ${currentTask.timed ? `
              <div class="task-timer-section">
                <div class="timer-ring-container">
                  <svg class="timer-ring" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" class="timer-ring-bg"/>
                    <circle cx="60" cy="60" r="54" class="timer-ring-progress" id="timer-progress"
                      stroke-dasharray="339.292" stroke-dashoffset="0"/>
                  </svg>
                  <div class="timer-text" id="timer-text">${currentTask.timeLimit}s</div>
                </div>
                <button class="btn btn-primary" id="btn-start-timer" style="margin-top:12px;">
                  <span class="icon">▶️</span> Start
                </button>
              </div>
            ` : `
              <button class="btn btn-primary btn-block" id="btn-task-done" style="margin-top:20px;">
                Gotowe – oceń wykonanie
              </button>
            `}
          </div>
        </div>
      `;

      // ============ FAZA: TIMER ============
    } else if (turnPhase === 'timer') {
      const modBadge = chosenModifier
        ? `<div class="modifier-badge"><span class="icon">${chosenModifier.emoji}</span> ${chosenModifier.label}</div>`
        : '';
        
      const obstaclesHtml = getObstaclesHtml(currentTask, gameState.currentPlayer);

      content = `
        ${headerBar}
        <div class="game-center">
          <div class="task-card timer-active-card ${currentTask.isUndressing ? 'undressing-card' : ''}">
            ${currentTask.isUndressing ? '<div class="task-card-category undressing-badge" style="margin-bottom:12px;">✨ ZADANIE SPECJALNE: ROZBIERANKO</div>' : ''}
            <div class="task-card-text" style="font-size:16px;">${currentTask.text}</div>
            ${obstaclesHtml}
            ${modBadge}
            <div class="timer-ring-container big-timer">
              <svg class="timer-ring" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" class="timer-ring-bg"/>
                <circle cx="60" cy="60" r="54" class="timer-ring-progress" id="timer-progress"
                  stroke-dasharray="339.292" stroke-dashoffset="0"/>
              </svg>
              <div class="timer-text" id="timer-text">${timerRemaining}s</div>
            </div>
          </div>
        </div>
      `;

      // ============ FAZA: OCENA WYKONANIA ============
    } else if (turnPhase === 'result') {
      const bonus = chosenModifier ? chosenModifier.bonusPoints : 0;

      // Opcje zależą od tego czy gracz wziął utrudnienie
      let resultOptions = '';

      if (chosenModifier) {
        // Z UTRUDNIENIEM – 6 opcji
        resultOptions = `
          <div class="result-group">
            <div class="result-group-label">Z utrudnieniem (<span class="icon">${chosenModifier.emoji}</span> ${chosenModifier.label}):</div>
            <button class="btn btn-block result-btn result-completed" data-result="completed_mod">
              <span class="icon">✅</span> Wykonane z utrudnieniem
              <span class="result-points">+${scoring.completed + bonus} pkt</span>
            </button>
            <button class="btn btn-block result-btn result-partial" data-result="partial_mod">
              <span class="icon">🤏</span> Częściowo z utrudnieniem
              <span class="result-points">+${scoring.partial + Math.floor(bonus / 2)} pkt</span>
            </button>
            <button class="btn btn-block result-btn result-failed-mod" data-result="failed_mod">
              <span class="icon">💀</span> Niewykonane z utrudnieniem
              <span class="result-points">${scoring.failedWithModifier} pkt</span>
            </button>
          </div>
          <div class="result-group" style="margin-top:14px;">
            <div class="result-group-label">Bez utrudnienia:</div>
            <button class="btn btn-block result-btn result-completed-no" data-result="completed">
              <span class="icon">👍</span> Wykonane bez utrudnienia
              <span class="result-points">+${scoring.completed} pkt</span>
            </button>
            <button class="btn btn-block result-btn result-partial" data-result="partial">
              <span class="icon">🤏</span> Częściowo bez utrudnienia
              <span class="result-points">+${scoring.partial} pkt</span>
            </button>
            <button class="btn btn-block result-btn result-failed" data-result="failed">
              <span class="icon">❌</span> Niewykonane
              <span class="result-points">${scoring.failed} pkt</span>
            </button>
          </div>
        `;
      } else {
        // BEZ UTRUDNIENIA – 3 opcje
        resultOptions = `
          <button class="btn btn-block result-btn result-completed" data-result="completed">
            <span class="icon">✅</span> Wykonane!
            <span class="result-points">+${scoring.completed} pkt</span>
          </button>
          <button class="btn btn-block result-btn result-partial" data-result="partial">
            <span class="icon">🤏</span> Częściowo
            <span class="result-points">+${scoring.partial} pkt</span>
          </button>
          <button class="btn btn-block result-btn result-failed" data-result="failed">
            <span class="icon">❌</span> Niewykonane
            <span class="result-points">${scoring.failed} pkt</span>
          </button>
        `;
      }

      content = `
        ${headerBar}
        <div class="game-center" style="justify-content: flex-start; padding-top:8px;">
          <div class="result-section">
            <h2 style="font-size:20px; font-weight:700; margin-bottom:16px; text-align:center;">Jak poszło?</h2>
            ${resultOptions}
          </div>
        </div>
      `;
    }

    container.innerHTML = `<div class="screen" id="screen-game">${content}</div>`;
    attachListeners();
  }

  // ==============================================================
  // EVENT LISTENERS
  // ==============================================================
  function attachListeners() {
    if (turnPhase === 'draw') {
      container.querySelector('#btn-draw')?.addEventListener('click', startRolling);

    } else if (turnPhase === 'blurred') {
      container.querySelector('#btn-yes-mod')?.addEventListener('click', () => {
        chosenModifier = container._pendingModifier;
        turnPhase = 'reveal';
        render();
      });
      container.querySelector('#btn-no-mod')?.addEventListener('click', () => {
        chosenModifier = null;
        turnPhase = 'reveal';
        render();
      });

    } else if (turnPhase === 'reveal') {
      container.querySelector('#btn-start-timer')?.addEventListener('click', startTimer);
      container.querySelector('#btn-task-done')?.addEventListener('click', () => {
        turnPhase = 'result';
        render();
      });

    } else if (turnPhase === 'result') {
      container.querySelectorAll('.result-btn').forEach(btn => {
        btn.addEventListener('click', () => finishTask(btn.dataset.result));
      });
    }
  }

  // ==============================================================
  // LOGIKA
  // ==============================================================
  function startRolling() {
    const player = gameState.currentPlayer;
    
    if (gameState.currentTaskInStage === gameState.stageUndressIndexFemale) {
      currentTask = pickUndressingTask('female');
    } else if (gameState.currentTaskInStage === gameState.stageUndressIndexMale) {
      currentTask = pickUndressingTask('male');
    } else {
      currentTask = pickRandomTask(gameState.currentStage, player);
    }
    
    gameState.usedTaskIds.add(currentTask.id);
    chosenModifier = null;

    turnPhase = 'rolling';
    Feedback.playDraw();
    render();

    // Animacja
    let count = 0;
    const emojis = ['🎲', '🃏', '🎴', '✨', '🔮', '💫'];
    const rollingAnim = setInterval(() => {
      const icon = container.querySelector('.rolling-icon');
      if (icon) icon.textContent = emojis[count % emojis.length];
      count++;
    }, 150);

    setTimeout(() => {
      clearInterval(rollingAnim);
      turnPhase = 'blurred';
      render();
    }, 1800);
  }

  function startTimer() {
    timerRemaining = currentTask.timeLimit;
    const totalTime = currentTask.timeLimit;
    const circumference = 339.292;

    // Hide the Start button instead of re-rendering
    const startBtn = container.querySelector('#btn-start-timer');
    if (startBtn) startBtn.style.display = 'none';

    // Update phase for tracking, but do NOT re-render
    turnPhase = 'timer';

    timerInterval = setInterval(() => {
      timerRemaining--;
      const progress = container.querySelector('#timer-progress');
      const text = container.querySelector('#timer-text');

      if (progress) {
        progress.style.strokeDashoffset = circumference * (1 - timerRemaining / totalTime);
        if (timerRemaining <= 10) progress.style.stroke = '#ef4444';
        else if (timerRemaining <= totalTime * 0.3) progress.style.stroke = '#f97316';
      }
      if (text) {
        text.textContent = timerRemaining + 's';
        if (timerRemaining <= 10) { text.style.color = '#ef4444'; text.style.fontWeight = '800'; }
      }
      if (timerRemaining <= 10 && timerRemaining > 0) Feedback.playTimerTick();
      if (timerRemaining <= 0) {
        clearInterval(timerInterval);
        Feedback.playTimerEnd();
        turnPhase = 'result';
        render();
      }
    }, 1000);
  }

  function finishTask(result) {
    clearInterval(timerInterval);

    const bonus = chosenModifier ? chosenModifier.bonusPoints : 0;
    let points = 0;

    switch (result) {
      case 'completed_mod': points = scoring.completed + bonus; break;
      case 'completed': points = scoring.completed; break;
      case 'partial_mod': points = scoring.partial + Math.floor(bonus / 2); break;
      case 'partial': points = scoring.partial; break;
      case 'failed_mod': points = scoring.failedWithModifier; break;
      case 'failed': points = scoring.failed; break;
    }

    // Dodaj punkty
    gameState.addScore(gameState.currentPlayer, points);

    // DYNAMICZNY TRACKING UBRAŃ
    // wasCompleted = wykonane lub częściowo → ubrania zdjęte
    const wasCompleted = ['completed', 'completed_mod', 'partial', 'partial_mod'].includes(result);

    if (wasCompleted) {
      // Ustal KOGO dotyczy zdjęcie ubrania: aktywnego gracza ('self') lub partnera ('partner')
      const removesFrom = currentTask.removesClothingFrom ?? 'self';
      const clothingTargetPlayer = removesFrom === 'partner'
        ? (gameState.currentPlayer === 'female' ? 'male' : 'female')
        : gameState.currentPlayer;

      if (currentTask.isUndressing) {
        // Zadania rozbierankowe: gracz fizycznie zdejmuje 1 losowy element.
        // Nie wiemy który – usuwamy losowy z Seta docelowego gracza.
        const clothingSet = gameState.getPlayerClothing(clothingTargetPlayer);
        if (clothingSet.size > 0) {
          const items = Array.from(clothingSet);
          const randomItem = items[Math.floor(Math.random() * items.length)];
          gameState.removeClothing(clothingTargetPlayer, randomItem);
        }
      } else if (currentTask.removesClothing && currentTask.removesClothing.length > 0) {
        // Zadania zwykłe: usuń konkretne, zdefiniowane elementy z właściwego gracza.
        for (const clothingId of currentTask.removesClothing) {
          gameState.removeClothing(clothingTargetPlayer, clothingId);
        }
      }

      Feedback.playSuccess();
    }

    // Animacja punktów → następna tura
    showPointsAnimation(container, points, () => advanceToNext());
  }

  function advanceToNext() {
    const config = stageConfig[gameState.gameLength];
    const totalInStage = config[gameState.currentStage];
    gameState.currentTaskInStage++;

    // Zmiana gracza
    gameState.currentPlayer = gameState.currentPlayer === 'female' ? 'male' : 'female';

    if (gameState.currentTaskInStage >= totalInStage + 2) { // +2 za dwa zadania rozbierankowe
      gameState.currentStage++;
      gameState.currentTaskInStage = 0;
      if (gameState.currentStage <= 3) {
        const nextTotal = config[gameState.currentStage] + 2;
        const { female: uf, male: um } = pickTwoUndressIndices(nextTotal);
        gameState.stageUndressIndexFemale = uf;
        gameState.stageUndressIndexMale   = um;
      }
      
      // Po etapie 4 (index 3) → koniec gry (stage 5 obsługiwane osobno)
      if (gameState.currentStage > 3) { onGameEnd(); return; }
      showStageBanner(container, gameState.currentStage, () => {
        turnPhase = 'draw'; currentTask = null; chosenModifier = null;
        render();
      });
      return;
    }

    turnPhase = 'draw'; currentTask = null; chosenModifier = null;
    render();
  }
}

// ==============================================================
// UI HELPERS
// ==============================================================
function showPointsAnimation(container, points, cb) {
  const overlay = document.createElement('div');
  overlay.className = 'points-overlay';
  const sign = points >= 0 ? '+' : '';
  const color = points > 0 ? '#22c55e' : points < 0 ? '#ef4444' : '#9ca3af';
  overlay.innerHTML = `<div class="points-anim" style="color:${color};">${sign}${points} pkt</div>`;
  container.appendChild(overlay);
  setTimeout(() => { overlay.remove(); cb(); }, 1500);
}

function showStageBanner(container, stageIndex, cb) {
  const emojis = ['🌅', '🔥', '💥', '🚀', '💦'];
  container.innerHTML = `
    <div class="screen centered" id="stage-banner">
      <div style="font-size:72px; animation: pulse 1s ease-in-out infinite;">${emojis[stageIndex]}</div>
      <h1 class="title" style="font-size:32px; margin-top:16px;">${stageNames[stageIndex]}</h1>
      <p class="subtitle" style="margin-top:8px;">
        ${stageIndex === 4 ? 'Wspólne wielkie wyzwanie!' : 'Przygotujcie się!'}
      </p>
    </div>
  `;
  setTimeout(cb, 2500);
}

// ==============================================================
// MID-GAME UNLOCK ACTIVITIES POPUP
// ==============================================================
function showUnlockActivitiesPopup() {
  // Potrzebujemy dostępu do głownego containera - użyjmy istniejącego z game.js closure
  const appContainer = document.getElementById('app') || document.body;
  
  const currentFemale = new Set(gameState.femaleActivities);
  const currentMale = new Set(gameState.maleActivities);
  const newFemaleSelected = new Set();
  const newMaleSelected = new Set();

  const html = `
    <div class="screen" id="midgame-unlock" style="z-index: 1000; position: absolute; top:0; left:0; width:100%; height:100%; background:var(--bg-color); display:flex; flex-direction:column;">
      <div class="screen-header" style="flex:0 0 auto;">
        <h1 class="title" style="font-size:24px;">Zmieniacie zasady?</h1>
        <p class="subtitle">W tym etapie brakuje zadań pasujących do Waszych zgód. Czy chcecie dodać nowe aktywności, na które pozwalacie?</p>
      </div>
      <div class="check-list stagger" id="unlock-activities-list" style="flex:1 1 auto; overflow-y:auto; padding-bottom:20px;"></div>
      <div class="screen-footer" style="flex:0 0 auto; display:flex; gap:10px;">
        <button class="btn btn-secondary" id="btn-unlock-skip" style="flex:1;">Pomiń</button>
        <button class="btn btn-primary" id="btn-unlock-save" style="flex:1;">Odblokuj zaznaczone</button>
      </div>
    </div>
  `;

  // Wstrzykujemy bezpośrednio do DOM by przykryć gre
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  const overlay = wrapper.firstElementChild;
  appContainer.appendChild(overlay);

  const list = overlay.querySelector('#unlock-activities-list');
  const btnSkip = overlay.querySelector('#btn-unlock-skip');
  const btnSave = overlay.querySelector('#btn-unlock-save');

  activityItems.forEach(item => {
    const hasFemale = currentFemale.has(item.id);
    const hasMale = currentMale.has(item.id);
    
    const el = document.createElement('div');
    el.className = 'check-item';
    
    if (hasFemale && hasMale) {
      el.classList.add('selected');
      el.style.opacity = '0.5';
      el.innerHTML = `
        <span class="check-icon">${item.emoji}</span>
        <div style="display:flex; flex-direction:column; flex:1; margin-left:12px;">
          <span class="check-label" style="margin-left:0;">${item.label}</span>
          <span style="font-size:11px; color:var(--primary-color);">Oboje macie tę zgodę</span>
        </div>
        <span class="check-box">✓</span>
      `;
      list.appendChild(el);
      return;
    }

    el.innerHTML = `
      <span class="check-icon">${item.emoji}</span>
      <div style="display:flex; flex-direction:column; flex:1; margin-left:12px; margin-right:12px;">
        <span class="check-label" style="margin-left:0;">${item.label}</span>
      </div>
      <div style="display:flex; gap: 8px;">
        <div class="mini-check ${hasFemale ? 'selected locked' : ''}" data-player="female" style="width:36px; height:36px; border-radius:8px; border:2px solid ${hasFemale ? 'var(--female-color)' : 'var(--border-color)'}; display:flex; align-items:center; justify-content:center; cursor:${hasFemale ? 'default' : 'pointer'}; background:${hasFemale ? 'var(--female-color-light)' : 'transparent'};">👩</div>
        <div class="mini-check ${hasMale ? 'selected locked' : ''}" data-player="male" style="width:36px; height:36px; border-radius:8px; border:2px solid ${hasMale ? 'var(--male-color)' : 'var(--border-color)'}; display:flex; align-items:center; justify-content:center; cursor:${hasMale ? 'default' : 'pointer'}; background:${hasMale ? 'var(--male-color-light)' : 'transparent'};">👨</div>
      </div>
    `;

    const femaleBtn = el.querySelector('[data-player="female"]');
    if (!hasFemale) {
      femaleBtn.addEventListener('click', () => {
        if (newFemaleSelected.has(item.id)) {
          newFemaleSelected.delete(item.id);
          femaleBtn.style.border = '2px solid var(--border-color)';
          femaleBtn.style.background = 'transparent';
        } else {
          newFemaleSelected.add(item.id);
          femaleBtn.style.border = '2px solid var(--female-color)';
          femaleBtn.style.background = 'var(--female-color-light)';
        }
      });
    }

    const maleBtn = el.querySelector('[data-player="male"]');
    if (!hasMale) {
      maleBtn.addEventListener('click', () => {
        if (newMaleSelected.has(item.id)) {
          newMaleSelected.delete(item.id);
          maleBtn.style.border = '2px solid var(--border-color)';
          maleBtn.style.background = 'transparent';
        } else {
          newMaleSelected.add(item.id);
          maleBtn.style.border = '2px solid var(--male-color)';
          maleBtn.style.background = 'var(--male-color-light)';
        }
      });
    }

    list.appendChild(el);
  });

  const closeAndRender = () => {
    overlay.remove();
    // Żeby wznowić flow w closure game.js, renderGameScreen przechowuje container
    // ale łatwiej wymusić re-render przez zmianę turnPhase lub kliknięcie "Losuj"
    const drawBtn = document.getElementById('btn-draw');
    if (drawBtn) drawBtn.click(); 
  };

  btnSkip.addEventListener('click', () => {
    gameState.midGameUnlockShownForStage = gameState.currentStage;
    gameState.save();
    closeAndRender();
  });

  btnSave.addEventListener('click', () => {
    if (newFemaleSelected.size > 0) gameState.femaleActivities = [...gameState.femaleActivities, ...newFemaleSelected];
    if (newMaleSelected.size > 0) gameState.maleActivities = [...gameState.maleActivities, ...newMaleSelected];
    gameState.midGameUnlockShownForStage = gameState.currentStage;
    gameState.save();
    closeAndRender();
  });
}
