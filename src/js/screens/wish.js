// Ekran życzenia
import { wishSuggestions } from '../data.js';

export function renderWishScreen(container, playerName, gender, onNext) {
    const indicatorClass = gender === 'female' ? 'female' : 'male';
    const indicatorEmoji = gender === 'female' ? '👩' : '👨';
    let currentSuggestionIndex = Math.floor(Math.random() * wishSuggestions.length);

    container.innerHTML = `
    <div class="screen" id="screen-wish">
      <div class="screen-header">
        <span class="player-indicator ${indicatorClass}">${indicatorEmoji} ${playerName}</span>
        <h1 class="title">Twoje życzenie</h1>
        <p class="subtitle">Co chcesz otrzymać, jeśli wygrasz?</p>
      </div>

      <div class="gap-md"></div>

      <div class="wish-container">
        <textarea class="input-field" id="wish-text" placeholder="Wpisz swoje życzenie..." rows="3"></textarea>
        
        <button class="wish-randomize" id="btn-wish-random">
          <span>🎲</span> Losuj pomysł
        </button>
      </div>

      <div class="spacer"></div>

      <div class="screen-footer">
        <button class="btn btn-primary btn-block" id="btn-wish-next" disabled>
          Zatwierdź <span class="emoji">✓</span>
        </button>
      </div>
    </div>
  `;

    const textarea = container.querySelector('#wish-text');
    const btnRandom = container.querySelector('#btn-wish-random');
    const btnNext = container.querySelector('#btn-wish-next');

    function checkInput() {
        btnNext.disabled = textarea.value.trim().length === 0;
    }

    textarea.addEventListener('input', checkInput);

    btnRandom.addEventListener('click', () => {
        textarea.value = wishSuggestions[currentSuggestionIndex];
        currentSuggestionIndex = (currentSuggestionIndex + 1) % wishSuggestions.length;
        // Shuffle next time
        if (currentSuggestionIndex === 0) {
            wishSuggestions.sort(() => Math.random() - 0.5);
        }
        checkInput();
        // Small animation
        textarea.style.transition = 'none';
        textarea.style.transform = 'scale(0.97)';
        textarea.style.opacity = '0.7';
        requestAnimationFrame(() => {
            textarea.style.transition = 'all 0.25s ease-out';
            textarea.style.transform = 'scale(1)';
            textarea.style.opacity = '1';
        });
    });

    btnNext.addEventListener('click', () => {
        onNext(textarea.value.trim());
    });
}
