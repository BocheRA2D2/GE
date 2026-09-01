// Ekran startowy – wpisywanie imion
import gameState from '../game-state.js';

export function renderStartScreen(container, onNext) {
  container.innerHTML = `
    <div class="screen centered" id="screen-start">
      <div class="hearts-bg" id="hearts-bg"></div>
      
      <div style="position:relative; z-index:1; width:100%; display:flex; flex-direction:column; align-items:center;">
        <div class="handoff-icon" style="animation: heartbeat 1.5s ease-in-out infinite;">❤️</div>
        
        <h1 class="title" style="font-size:36px; margin-bottom:4px;">GE</h1>
        <p class="subtitle" style="margin-bottom:40px;">Gra Dla Par</p>
        
        <div style="width:100%; max-width:340px;" class="stagger">
          <div>
            <label class="input-label">👩 Imię Kobiety</label>
            <input type="text" class="input-field" id="female-name" placeholder="Wpisz imię..." autocomplete="off">
          </div>
          
          <div class="gap-md"></div>
          
          <div>
            <label class="input-label">👨 Imię Mężczyzny</label>
            <input type="text" class="input-field" id="male-name" placeholder="Wpisz imię..." autocomplete="off">
          </div>
          
          <div class="gap-md"></div>
          
          <label style="display:flex; align-items:center; gap:10px; cursor:pointer;">
            <input type="checkbox" id="hardcore-mode" style="width:24px;height:24px;accent-color:#e91e63;">
            <span style="font-weight:bold; color:#ff4081; font-size:1.1em;">🔥 Tryb Hardcore (Ekstremalny)</span>
          </label>
          
          <div class="gap-lg"></div>
          
          <button class="btn btn-primary btn-block" id="btn-start" disabled>
            <span class="icon">🎮</span> Rozpocznij
          </button>
        </div>
      </div>
    </div>
  `;

  // Floating hearts
  const heartsBg = container.querySelector('#hearts-bg');
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = ['❤️', '💕', '💗', '💖', '✨'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (8 + Math.random() * 12) + 's';
    heart.style.animationDelay = (Math.random() * 10) + 's';
    heart.style.fontSize = (14 + Math.random() * 16) + 'px';
    heartsBg.appendChild(heart);
  }

  const femaleInput = container.querySelector('#female-name');
  const maleInput = container.querySelector('#male-name');
  const hardcoreInput = container.querySelector('#hardcore-mode');
  const btnStart = container.querySelector('#btn-start');

  function checkInputs() {
    const f = femaleInput.value.trim();
    const m = maleInput.value.trim();
    btnStart.disabled = !(f.length > 0 && m.length > 0);
  }

  femaleInput.addEventListener('input', checkInputs);
  maleInput.addEventListener('input', checkInputs);

  btnStart.addEventListener('click', () => {
    gameState.femaleName = femaleInput.value.trim();
    gameState.maleName = maleInput.value.trim();
    gameState.isHardcore = hardcoreInput.checked;
    onNext();
  });
}
