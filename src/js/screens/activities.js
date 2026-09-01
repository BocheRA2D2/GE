// Ekran wyboru czynności
import { activityItems } from '../data.js';

export function renderActivitiesScreen(container, playerName, gender, onNext) {
    const indicatorClass = gender === 'female' ? 'female' : 'male';
    const indicatorEmoji = gender === 'female' ? '👩' : '👨';
    const selected = new Set();

    container.innerHTML = `
    <div class="screen" id="screen-activities">
      <div class="screen-header">
        <span class="player-indicator ${indicatorClass}">${indicatorEmoji} ${playerName}</span>
        <h1 class="title">Na co się godzisz?</h1>
        <p class="subtitle">Zaznacz czynności, które chcesz wykonywać w grze</p>
      </div>

      <div class="check-list stagger" id="activities-list"></div>

      <div class="screen-footer">
        <button class="btn btn-primary btn-block" id="btn-activities-next" disabled>
          Dalej <span class="icon">→</span>
        </button>
      </div>
    </div>
  `;

    const list = container.querySelector('#activities-list');
    const btnNext = container.querySelector('#btn-activities-next');

    activityItems.forEach(item => {
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
            btnNext.disabled = selected.size === 0;
        });
        list.appendChild(el);
    });

    btnNext.addEventListener('click', () => {
        onNext([...selected]);
    });
}
