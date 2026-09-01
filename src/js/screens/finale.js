// Ekran wyboru miejsca spustu
// Każdy gracz wybiera w ukryciu (wielokrotny wybór)
import { finaleOptions } from '../data.js';
import gameState from '../game-state.js';

export function renderFinaleSelectionScreen(container, playerName, gender, onDone) {
  const selected = new Set();
  const genderEmoji = gender === 'female' ? '👩' : '👨';

  container.innerHTML = `
    <div class="screen" id="screen-finale">
      <div class="screen-header" style="text-align:center;">
        <div style="font-size:48px; margin-bottom:8px; animation: float 3s ease-in-out infinite;">💦</div>
        <h1 class="title">Gdzie chcesz spust?</h1>
        <p class="subtitle" style="margin-bottom:4px;">
          ${genderEmoji} <strong>${playerName}</strong> – wybierz w ukryciu!
        </p>
        <p style="font-size:13px; color:var(--text-muted);">Druga osoba niech nie patrzy 🙈</p>
      </div>

      <div class="check-list stagger" id="finale-list"></div>

      <div class="screen-footer">
        <button class="btn btn-primary btn-block" id="btn-finale-confirm" disabled>
          <span class="icon">✅</span> Zatwierdź wybór
        </button>
      </div>
    </div>
  `;

  const list = container.querySelector('#finale-list');
  const btnConfirm = container.querySelector('#btn-finale-confirm');

  finaleOptions.forEach(item => {
    const el = document.createElement('div');
    el.className = 'check-item';
    el.dataset.id = item.id;
    el.innerHTML = `
      <span class="check-icon">${item.emoji}</span>
      <span class="check-label">${item.label}</span>
      <span class="check-box"></span>
    `;
    el.addEventListener('click', () => {
      if (selected.has(item.id)) {
        selected.delete(item.id);
        el.classList.remove('selected');
        el.querySelector('.check-box').textContent = '';
      } else {
        selected.add(item.id);
        el.classList.add('selected');
        el.querySelector('.check-box').textContent = '✓';
      }
      btnConfirm.disabled = selected.size === 0;
    });
    list.appendChild(el);
  });

  btnConfirm.addEventListener('click', () => {
    onDone([...selected]);
  });
}

// Ekran przekazania telefonu przed wyborem miejsca spustu
export function renderFinaleHandoffScreen(container, playerName, gender, onReady) {
  const genderEmoji = gender === 'female' ? '👩' : '👨';

  container.innerHTML = `
    <div class="screen centered" id="screen-finale-handoff">
      <div style="font-size:72px; margin-bottom:16px; animation: float 3s ease-in-out infinite;">📱</div>
      <h1 class="title" style="font-size:24px;">Teraz ${genderEmoji} ${playerName}</h1>
      <p class="subtitle" style="max-width:280px; margin: 12px auto;">
        Podaj telefon – ${playerName} wybiera w ukryciu gdzie chce spust
      </p>
      <div class="gap-lg"></div>
      <button class="btn btn-primary" id="btn-finale-handoff-go">
        <span class="icon">🙈</span> Mam telefon – wybieram!
      </button>
    </div>
  `;

  container.querySelector('#btn-finale-handoff-go').addEventListener('click', onReady);
}
