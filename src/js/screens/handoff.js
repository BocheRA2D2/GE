// Ekran przekazania telefonu
export function renderHandoffScreen(container, playerName, gender, onConfirm) {
    const isF = gender === 'female';
    const icon = isF ? '👩' : '👨';
    const indicatorClass = isF ? 'female' : 'male';
    const indicatorText = isF ? '👩 Jej kolej' : '👨 Jego kolej';

    container.innerHTML = `
    <div class="screen centered" id="screen-handoff">
      <div class="handoff-icon">${icon}</div>
      <div class="handoff-name">${playerName}</div>
      <p class="handoff-text">
        Teraz <strong>${playerName}</strong> bierze telefon do ręki.<br><br>
        Przekaż telefon i potwierdź, kiedy będziesz gotowa/gotowy!
      </p>
      <button class="btn btn-primary" id="btn-handoff-confirm">
        <span class="icon">✋</span> Mam telefon – zaczynamy!
      </button>
    </div>
  `;

    container.querySelector('#btn-handoff-confirm').addEventListener('click', () => {
        onConfirm();
    });
}
