// Zarządzanie wygaszaniem ekranu (Screen Wake Lock API)
let wakeLock = null;

export const requestWakeLock = async () => {
    if ('wakeLock' in navigator) {
        try {
            if (!wakeLock) {
                wakeLock = await navigator.wakeLock.request('screen');
                
                wakeLock.addEventListener('release', () => {
                    wakeLock = null;
                });
            }
        } catch (err) {
            console.warn(`Wake Lock błąd: ${err.name}, ${err.message}`);
        }
    }
};

// Automatyczne wznawianie blokady po powrocie do karty
document.addEventListener('visibilitychange', async () => {
    if (wakeLock !== null && document.visibilityState === 'visible') {
        requestWakeLock();
    }
});
