// Ekran wyboru dodatków / akcesoriów
import { accessoryItems } from '../data.js';
import gameState from '../game-state.js';

export function renderAccessoriesScreen(container, onNext) {
    const selected = new Set();

    container.innerHTML = `
    <div class="screen" id="screen-accessories">
      <div class="screen-header" style="text-align:center;">
        <div style="font-size:48px; margin-bottom:12px; animation: float 3s ease-in-out infinite;">🎒</div>
        <h1 class="title">Jakie macie dodatki?</h1>
        <p class="subtitle">Zaznaczcie co macie pod ręką – zadania będą dopasowane</p>
      </div>

      <div class="check-list stagger" id="accessories-list"></div>

      <div class="screen-footer">
        <button class="btn btn-primary btn-block" id="btn-acc-next">
          <span class="icon">🚀</span> Zaczynamy grę!
        </button>
        <div style="text-align:center; margin-top:10px;">
          <button class="btn btn-secondary" id="btn-acc-skip" style="font-size:14px; padding:10px 20px;">
            Pomijam – grajmy bez dodatków
          </button>
        </div>
      </div>
    </div>
  `;

    const list = container.querySelector('#accessories-list');
    const btnNext = container.querySelector('#btn-acc-next');
    const btnSkip = container.querySelector('#btn-acc-skip');

    accessoryItems.forEach(item => {
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
        });
        list.appendChild(el);
    });

    btnNext.addEventListener('click', () => {
        gameState.accessories = [...selected];
        onNext();
    });

    btnSkip.addEventListener('click', () => {
        gameState.accessories = [];
        onNext();
    });
}
