// Prosty system audio oparty na Web Audio API
// Pozwala na generowanie dźwięków bez ładowania zewnętrznych plików MP3

let audioCtx = null;

function getAudioCtx() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

function playTone(freq, type, duration, vol = 0.1) {
    try {
        const ctx = getAudioCtx();
        if (ctx.state === 'suspended') ctx.resume();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        // Exponential decay for better sound
        gain.gain.setValueAtTime(vol, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + duration);
    } catch (e) {
        console.warn('AudioContext failed', e);
    }
}

// Główny obiekt audio / haptyki
export const Feedback = {
    playClick() {
        playTone(600, 'sine', 0.05, 0.05); // Krótki, wysoki "pop"
        if (navigator.vibrate) navigator.vibrate(20);
    },

    playDraw() {
        // Dźwięk podczas losowania - "koło fortuny" lub arpeggio
        let t = 0;
        const interval = setInterval(() => {
            playTone(400 + Math.random() * 200, 'sine', 0.05, 0.05);
            if (navigator.vibrate) navigator.vibrate(10);
            t++;
            if (t > 15) clearInterval(interval);
        }, 100);
    },

    playSuccess() {
        // Radosny akord z wibracją
        playTone(523.25, 'sine', 0.3, 0.1); // C5
        setTimeout(() => playTone(659.25, 'sine', 0.4, 0.1), 100); // E5
        setTimeout(() => playTone(783.99, 'sine', 0.5, 0.1), 200); // G5
        if (navigator.vibrate) navigator.vibrate([50, 50, 100]);
    },

    playTimerTick() {
        playTone(800, 'square', 0.05, 0.02);
        if (navigator.vibrate) navigator.vibrate(10);
    },

    playTimerEnd() {
        playTone(400, 'sawtooth', 0.5, 0.2);
        setTimeout(() => playTone(300, 'sawtooth', 0.8, 0.2), 200);
        if (navigator.vibrate) navigator.vibrate([100, 50, 200, 50, 300]);
    },

    init() {
        // Zainicjowanie AudioContext po pierwszym kliknięciu (polityka przeglądarek)
        document.body.addEventListener('click', () => {
            getAudioCtx();
        }, { once: true });
    }
};
