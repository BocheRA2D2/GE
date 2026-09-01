// Główny kontroler aplikacji – routing między ekranami
import gameState from './game-state.js';
import { renderStartScreen } from './screens/start.js';
import { renderHandoffScreen } from './screens/handoff.js';
import { renderClothingScreen } from './screens/clothing.js';
import { renderActivitiesScreen } from './screens/activities.js';
import { renderWishScreen } from './screens/wish.js';
import { renderGameLengthScreen } from './screens/game-length.js';
import { renderAccessoriesScreen } from './screens/accessories.js';
import { renderGameScreen } from './screens/game.js';
import { renderFinaleSelectionScreen, renderFinaleHandoffScreen } from './screens/finale.js';
import { renderResultsScreen, renderThankYouScreen } from './screens/results.js';
import { Feedback } from './audio.js';
import { requestWakeLock } from './wake-lock.js';

const app = document.getElementById('app');

// Inicjalizacja kontekstu audio przy pierwszym kliknięciu użytkownika na stronie
Feedback.init();

// Globalny nasłuchiwacz kliknięć dla efektów haptycznych i dźwiękowych
document.addEventListener('click', (e) => {
    // Request Wake Lock on first interaction
    requestWakeLock();
    // Sprawdź czy kliknięty element to przycisk lub element listy (np. Checkbox)
    if (e.target.closest('button') || e.target.closest('.btn') || e.target.closest('.check-item') || e.target.closest('.length-option')) {
        Feedback.playClick();
    }
});

// Pełny flow:
// 1.  Start (imiona)
// 2.  Handoff → Kobieta
// 3.  Kobieta: Ubrania → Czynności → Życzenie
// 4.  Handoff → Mężczyzna
// 5.  Mężczyzna: Ubrania → Czynności → Życzenie
// 6.  Wybór długości gry
// 7.  Wybór dodatków
// 8.  GRA (etapy 1-4, na zmianę)
// 9.  Po etapie 4: Mężczyzna wybiera miejsce spustu w ukryciu
// 10. Handoff → Kobieta wybiera miejsce spustu w ukryciu
// 11. Etap 5 – Spust (zadanie dopasowane do wspólnego wyboru)
// 12. Wyniki + nagroda + miejsce spustu
// 13. Podziękowanie

function navigate(screen) {
    gameState.currentPhase = screen;
    gameState.save();

    switch (screen) {
        case 'start':
            renderStartScreen(app, () => navigate('female-handoff'));
            break;

        case 'female-handoff':
            renderHandoffScreen(app, gameState.femaleName, 'female', () => navigate('female-clothing'));
            break;
        case 'female-clothing':
            renderClothingScreen(app, gameState.femaleName, 'female', (items) => {
                gameState.femaleClothing = items;
                navigate('female-activities');
            });
            break;
        case 'female-activities':
            renderActivitiesScreen(app, gameState.femaleName, 'female', (items) => {
                gameState.femaleActivities = items;
                navigate('female-wish');
            });
            break;
        case 'female-wish':
            renderWishScreen(app, gameState.femaleName, 'female', (wish) => {
                gameState.femaleWish = wish;
                navigate('male-handoff');
            });
            break;

        case 'male-handoff':
            renderHandoffScreen(app, gameState.maleName, 'male', () => navigate('male-clothing'));
            break;
        case 'male-clothing':
            renderClothingScreen(app, gameState.maleName, 'male', (items) => {
                gameState.maleClothing = items;
                navigate('male-activities');
            });
            break;
        case 'male-activities':
            renderActivitiesScreen(app, gameState.maleName, 'male', (items) => {
                gameState.maleActivities = items;
                navigate('male-wish');
            });
            break;
        case 'male-wish':
            renderWishScreen(app, gameState.maleName, 'male', (wish) => {
                gameState.maleWish = wish;
                navigate('game-length');
            });
            break;

        case 'game-length':
            renderGameLengthScreen(app, () => navigate('accessories'));
            break;

        case 'accessories':
            renderAccessoriesScreen(app, () => navigate('game'));
            break;

        // ======= GRA (etapy 1-4) =======
        case 'game':
            renderGameScreen(app, () => {
                // Po etapie 4 → wybór miejsca spustu
                navigate('finale-male-handoff');
            });
            break;

        // ======= WYBÓR MIEJSCA SPUSTU =======
        case 'finale-male-handoff':
            renderFinaleHandoffScreen(app, gameState.maleName, 'male', () => navigate('finale-male'));
            break;

        case 'finale-male':
            renderFinaleSelectionScreen(app, gameState.maleName, 'male', (choices) => {
                gameState.maleFinale = choices;
                navigate('finale-female-handoff');
            });
            break;

        case 'finale-female-handoff':
            renderFinaleHandoffScreen(app, gameState.femaleName, 'female', () => navigate('finale-female'));
            break;

        case 'finale-female':
            renderFinaleSelectionScreen(app, gameState.femaleName, 'female', (choices) => {
                gameState.femaleFinale = choices;
                navigate('final-task');
            });
            break;

        // ======= ETAP 5 – Spust (zadanie dopasowane do wybranego miejsca) =======
        case 'final-task':
            renderFinalSharedTask(app, () => navigate('results'));
            break;

        // ======= WYNIKI =======
        case 'results':
            renderResultsScreen(app, () => navigate('thank-you'));
            break;

        case 'thank-you':
            renderThankYouScreen(app);
            break;
    }
}

// Etap 5 – zadanie spustu dopasowane do wybranego miejsca
import { tasks, finaleOptions } from './data.js';

function renderFinalSharedTask(container, onDone) {
    // Znajdź wspólne wybory miejsca spustu
    const maleFinale = gameState.maleFinale || [];
    const femaleFinale = gameState.femaleFinale || [];
    const commonFinale = maleFinale.filter(id => femaleFinale.includes(id));

    // Wybierz docelowe miejsce: wspólne > kobieta > mężczyzna > losowe
    let chosenTarget;
    if (commonFinale.length > 0) {
        chosenTarget = commonFinale[Math.floor(Math.random() * commonFinale.length)];
    } else if (femaleFinale.length > 0) {
        chosenTarget = femaleFinale[Math.floor(Math.random() * femaleFinale.length)];
    } else if (maleFinale.length > 0) {
        chosenTarget = maleFinale[Math.floor(Math.random() * maleFinale.length)];
    } else {
        chosenTarget = 'chusteczka'; // fallback
    }

    // Znajdź etykietę wybranego miejsca
    const targetOption = finaleOptions.find(o => o.id === chosenTarget);
    const targetLabel = targetOption ? `${targetOption.emoji} ${targetOption.label}` : chosenTarget;
    const isCommon = commonFinale.includes(chosenTarget);

    // Pokaż banner
    container.innerHTML = `
    <div class="screen centered" id="stage-banner">
      <div style="font-size:72px; animation: pulse 1s ease-in-out infinite;">💦</div>
      <h1 class="title" style="font-size:32px; margin-top:16px;">Etap 5 – Spust</h1>
      <p class="subtitle" style="margin-top:8px;">Miejsce: ${targetLabel}</p>
      ${isCommon ? '<p style="font-size:13px; color:var(--accent-rose); margin-top:4px;">Myślicie tak samo! 💕</p>' : ''}
    </div>
  `;

    setTimeout(() => {
        // Filtruj zadania etapu 5 po wybranym finaleTarget
        let stage5Tasks = tasks.filter(t => t.stage === 5 && t.finaleTarget === chosenTarget);
        if (stage5Tasks.length === 0) {
            // Fallback – jakiekolwiek zadanie z etapu 5
            stage5Tasks = tasks.filter(t => t.stage === 5);
        }
        const task = stage5Tasks[Math.floor(Math.random() * stage5Tasks.length)] || {
            text: 'Doprowadźcie się nawzajem do końca w dowolny sposób – bez żadnych hamulców! 🔥',
            category: 'hot'
        };

        // Animacja losowania
        container.innerHTML = `
      <div class="screen centered">
        <div class="rolling-animation">
          <div class="rolling-card" id="rolling-card">
            <div class="rolling-icon">🎲</div>
          </div>
          <p class="rolling-text">Losuję zadanie spustu...</p>
        </div>
      </div>
    `;

        const emojis = ['🎲', '🃏', '🎴', '✨', '🔮', '💫', '💦'];
        let count = 0;
        const anim = setInterval(() => {
            const icon = container.querySelector('.rolling-icon');
            if (icon) icon.textContent = emojis[count % emojis.length];
            count++;
        }, 150);

        setTimeout(() => {
            clearInterval(anim);

            // Pokaż zadanie
            container.innerHTML = `
        <div class="screen" id="screen-final-task">
          <div class="game-center">
            <div style="font-size:48px; margin-bottom:12px;">💦🔥</div>
            <div style="font-size:14px; font-weight:600; color:var(--accent-rose); text-transform:uppercase; letter-spacing:1px; margin-bottom:8px;">
              Spust – ${targetLabel}
            </div>
            <div class="task-card revealed-card" style="margin-top:12px;">
              <div class="task-card-text" style="font-size:20px; line-height:1.6;">${task.text}</div>
              <div style="margin-top:14px; font-size:13px; color:var(--text-muted);">
                To zadanie nie jest punktowane – dajcie z siebie wszystko! 🔥
              </div>
            </div>
            <div class="gap-lg"></div>
            <button class="btn btn-primary btn-block" id="btn-final-done">
              <span class="emoji">✨</span> Gotowe – pokaż wyniki!
            </button>
          </div>
        </div>
      `;

            container.querySelector('#btn-final-done').addEventListener('click', onDone);
        }, 2000);
    }, 2500);
}

// Start
if (gameState.load()) {
    // Resume from loaded state
    navigate(gameState.currentPhase);
} else {
    // New game
    navigate('start');
}
