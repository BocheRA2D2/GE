// Ekran wyników gry i ekran podziękowania
import gameState from '../game-state.js';
import { finaleOptions } from '../data.js';

export function renderResultsScreen(container, onThankYou) {
  const femaleScore = gameState.femaleScore;
  const maleScore = gameState.maleScore;

  const isTie = femaleScore === maleScore;
  const winnerGender = femaleScore > maleScore ? 'female' : 'male';
  const winnerName = winnerGender === 'female' ? gameState.femaleName : gameState.maleName;
  const loserName = winnerGender === 'female' ? gameState.maleName : gameState.femaleName;
  const winnerWish = winnerGender === 'female' ? gameState.femaleWish : gameState.maleWish;

  // Znajdź wspólne miejsca spustu
  const maleFinale = gameState.maleFinale || [];
  const femaleFinale = gameState.femaleFinale || [];
  const commonFinale = maleFinale.filter(id => femaleFinale.includes(id));
  const finaleToShow = commonFinale.length > 0 ? commonFinale : [...new Set([...femaleFinale, ...maleFinale])];
  const finaleLabels = finaleToShow.map(id => {
    const opt = finaleOptions.find(o => o.id === id);
    return opt ? `${opt.emoji} ${opt.label}` : id;
  });

  let rewardSection = '';
  if (isTie) {
    rewardSection = `
      <div class="result-reward">
        <div class="reward-title">🤝 Remis – oboje dostajecie nagrodę!</div>
        <div class="reward-card">
          <div class="reward-player">${gameState.femaleName}:</div>
          <div class="reward-text">„${gameState.femaleWish}"</div>
        </div>
        <div class="reward-card" style="margin-top:10px;">
          <div class="reward-player">${gameState.maleName}:</div>
          <div class="reward-text">„${gameState.maleWish}"</div>
        </div>
      </div>
    `;
  } else {
    rewardSection = `
      <div class="result-reward">
        <div class="reward-title">🎁 Nagroda dla zwycięzcy:</div>
        <div class="reward-card">
          <div class="reward-text">„${winnerWish}"</div>
          <div class="reward-note">${loserName} – czas spełnić życzenie! 😏</div>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="screen" id="screen-results">
      <div class="results-content">
        <div style="font-size:64px; animation: heartbeat 1.5s ease-in-out infinite;">🏆</div>

        <h1 class="title" style="font-size:28px; margin-top:12px;">
          ${isTie ? 'Remis!' : `${winnerName} wygrywa!`}
        </h1>

        <div class="final-scores">
          <div class="final-score-card ${winnerGender === 'female' || isTie ? 'winner-card' : ''}">
            <div class="final-score-name">${gameState.femaleName}</div>
            <div class="final-score-value">${femaleScore}</div>
            <div class="final-score-label">punktów</div>
          </div>
          <div class="final-score-vs">VS</div>
          <div class="final-score-card ${winnerGender === 'male' || isTie ? 'winner-card' : ''}">
            <div class="final-score-name">${gameState.maleName}</div>
            <div class="final-score-value">${maleScore}</div>
            <div class="final-score-label">punktów</div>
          </div>
        </div>

        ${rewardSection}

        ${finaleLabels.length > 0 ? `
          <div class="finale-reveal">
            <div class="finale-reveal-title">💦 Gdzie spust:</div>
            <div class="finale-tags">
              ${finaleLabels.map(l => `<span class="finale-tag">${l}</span>`).join('')}
            </div>
            ${commonFinale.length > 0 ? `<div style="font-size:12px; color:var(--accent-rose); margin-top:6px;">Myślicie tak samo! 💕</div>` : ''}
          </div>
        ` : ''}

        <div class="gap-lg"></div>

        <button class="btn btn-primary btn-block" id="btn-thank-you">
          <span class="icon">💝</span> Zakończ grę
        </button>
      </div>
    </div>
  `;

  // Start confetti!
  setTimeout(() => {
    const screenEl = container.querySelector('#screen-results');
    if (screenEl) createConfetti(screenEl);
  }, 100);

  container.querySelector('#btn-thank-you').addEventListener('click', onThankYou);
}

function createConfetti(container) {
  const colors = ['#ff2d78', '#a855f7', '#fb7185', '#f97316', '#22c55e', '#3b82f6'];
  const emojis = ['🎈', '✨', '🎉', '💖'];

  for (let i = 0; i < 60; i++) {
    const conf = document.createElement('div');
    // Losowo element confetti lub emoji
    if (Math.random() > 0.7) {
      conf.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      conf.style.fontSize = (Math.random() * 10 + 10) + 'px';
    } else {
      conf.style.width = (Math.random() * 8 + 4) + 'px';
      conf.style.height = (Math.random() * 8 + 4) + 'px';
      conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      conf.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    }

    conf.style.position = 'absolute';
    conf.style.left = Math.random() * 100 + 'vw';
    conf.style.top = -20 + 'px';
    conf.style.zIndex = 100;
    conf.style.opacity = Math.random() + 0.5;

    // Animacja
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 1;

    conf.style.transition = `transform ${duration}s linear, opacity ${duration}s ease-in, top ${duration}s cubic-bezier(0.25, 1, 0.5, 1)`;
    container.appendChild(conf);

    setTimeout(() => {
      conf.style.transform = `rotate(${Math.random() * 720}deg) translateX(${Math.random() * 100 - 50}px)`;
      conf.style.top = '100vh';
      conf.style.opacity = 0;
    }, delay * 1000 + 50);

    setTimeout(() => conf.remove(), (duration + delay) * 1000);
  }
}

export function renderThankYouScreen(container) {
  container.innerHTML = `
    <div class="screen centered" id="screen-thank-you">
      <div class="thank-you-content">
        <div class="thank-you-hearts">
          <span style="animation: float 2s ease-in-out infinite;">💕</span>
          <span style="animation: float 2.5s ease-in-out infinite 0.3s;">❤️</span>
          <span style="animation: float 2s ease-in-out infinite 0.6s;">💕</span>
        </div>

        <h1 class="title" style="font-size:32px; margin-top:20px;">Dziękujemy!</h1>

        <p class="subtitle" style="max-width:300px; margin: 16px auto; line-height:1.7;">
          Mam nadzieję, że gra Wam się podobała i zbliżyła Was do siebie jeszcze bardziej ❤️
        </p>

        <div class="glass-panel" style="margin-top:20px; text-align:center; max-width:300px;">
          <p style="font-size:14px; color:var(--text-secondary); line-height:1.6;">
            <strong>${gameState.femaleName}</strong> & <strong>${gameState.maleName}</strong><br>
            Bawcie się dobrze resztę wieczoru! 🌙
          </p>
        </div>

        <div class="gap-lg"></div>

        <button class="btn btn-secondary" onclick="location.reload()" style="padding: 12px 32px;">
          <span class="icon">🔄</span> Zagraj ponownie
        </button>
      </div>
    </div>
  `;
}
