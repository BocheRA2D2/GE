// Ekran wyboru długości gry — Krótka / Normalna / Długa
import { gameLengthOptions } from '../data.js';
import gameState from '../game-state.js';

export function renderGameLengthScreen(container, onNext) {
  let selectedValue = null;

  container.innerHTML = `
    <div class="screen" id="screen-length">
      <div class="screen-header" style="text-align:center;">
        <div style="font-size:48px; margin-bottom:12px; animation: float 3s ease-in-out infinite;">🎮</div>
        <h1 class="title">Jak długo gracie?</h1>
        <p class="subtitle">
          <strong>${gameState.femaleName}</strong> & <strong>${gameState.maleName}</strong> – wybierzcie razem!
        </p>
      </div>

      <div class="gap-md"></div>

      <div class="length-options stagger" id="length-options"></div>

      <div class="spacer"></div>

      <div class="screen-footer">
        <button class="btn btn-primary btn-block" id="btn-length-next" disabled>
          Dalej <span class="icon">→</span>
        </button>
      </div>
    </div>
  `;

  const optionsContainer = container.querySelector('#length-options');
  const btnNext = container.querySelector('#btn-length-next');

  gameLengthOptions.forEach(opt => {
    const el = document.createElement('div');
    el.className = 'length-option';
    el.dataset.value = opt.value;
    el.innerHTML = `
      <div style="font-size:32px;">${opt.emoji}</div>
      <div style="flex:1; padding-left:14px;">
        <div style="font-size:17px; font-weight:700; color:var(--text-primary);">${opt.label}</div>
        <div class="desc">${opt.desc}</div>
        <div style="font-size:12px; color:var(--text-muted); margin-top:2px;">${opt.totalTasks} zadań łącznie</div>
      </div>
    `;
    el.addEventListener('click', () => {
      container.querySelectorAll('.length-option').forEach(o => o.classList.remove('selected'));
      el.classList.add('selected');
      selectedValue = opt.value;
      btnNext.disabled = false;
    });
    optionsContainer.appendChild(el);
  });

  btnNext.addEventListener('click', () => {
    gameState.gameLength = selectedValue;
    onNext();
  });
}
