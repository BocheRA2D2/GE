// Centralny stan gry
const gameState = {
    femaleName: '',
    maleName: '',
    femaleClothing: [],    // co zaznaczono na starcie
    maleClothing: [],
    femaleActivities: [],
    maleActivities: [],
    femaleWish: '',
    maleWish: '',
    gameLength: 'medium',
    accessories: [],
    currentPhase: 'start',
    maleFinale: [],    // gdzie mężczyzna chce skończyć wieczór
    femaleFinale: [],  // gdzie kobieta chce skończyć wieczór
    isHardcore: false, // tryb z ekstremalnymi zadaniami

    // === DYNAMICZNY STAN ROZGRYWKI ===
    currentStage: 0,
    currentTaskInStage: 0,
    currentPlayer: 'female',   // kto teraz losuje
    femaleScore: 0,
    maleScore: 0,
    usedTaskIds: new Set(),
    stageUndressIndexFemale: -1,  // pozycja slotu rozbierającego ONA w etapie
    stageUndressIndexMale: -1,    // pozycja slotu rozbierającego ON w etapie
    midGameUnlockShownForStage: -1, // który etap już widział popup odblokowania aktywności

    // DYNAMICZNY STAN UBRAŃ – klucz do mechaniki!
    femaleCurrentClothing: new Set(),
    maleCurrentClothing: new Set(),

    // Zapisywanie stanu do localStorage
    save() {
        try {
            const dataToSave = { ...this };
            // Set nie ulega serializacji automatycznie, zamieniamy na tablice
            dataToSave.usedTaskIds = Array.from(this.usedTaskIds);
            dataToSave.femaleCurrentClothing = Array.from(this.femaleCurrentClothing);
            dataToSave.maleCurrentClothing = Array.from(this.maleCurrentClothing);
            
            // Usuwamy metody (nie ulegną i tak serializacji, ale dla czystości)
            delete dataToSave.save;
            delete dataToSave.load;
            delete dataToSave.clear;
            delete dataToSave.initClothingState;
            delete dataToSave.getPlayerClothing;
            delete dataToSave.getPlayerActivities;
            delete dataToSave.removeClothing;
            delete dataToSave.addScore;

            localStorage.setItem('ge-couple-game-state', JSON.stringify(dataToSave));
        } catch (e) {
            console.error("Błąd podczas zapisywania stanu:", e);
        }
    },

    // Wczytywanie stanu z localStorage
    load() {
        try {
            const saved = localStorage.getItem('ge-couple-game-state');
            if (saved) {
                const parsed = JSON.parse(saved);
                Object.assign(this, parsed);
                // Odtworzenie Setów
                this.usedTaskIds = new Set(parsed.usedTaskIds || []);
                this.femaleCurrentClothing = new Set(parsed.femaleCurrentClothing || []);
                this.maleCurrentClothing = new Set(parsed.maleCurrentClothing || []);
                return true;
            }
        } catch (e) {
            console.error("Błąd podczas wczytywania stanu:", e);
        }
        return false;
    },
    
    // Czyszczenie stanu (nowa gra)
    clear() {
        localStorage.removeItem('ge-couple-game-state');
    },

    // Inicjalizacja stanu ubrań przed grą
    initClothingState() {
        this.femaleCurrentClothing = new Set(this.femaleClothing);
        this.maleCurrentClothing = new Set(this.maleClothing);
        this.save();
    },

    // Pobierz aktualne ubrania gracza
    getPlayerClothing(player) {
        return player === 'female' ? this.femaleCurrentClothing : this.maleCurrentClothing;
    },

    // Pobierz aktywności gracza
    getPlayerActivities(player) {
        return player === 'female' ? this.femaleActivities : this.maleActivities;
    },

    // Usuń element ubrania (po wykonaniu zadania z removesClothing)
    removeClothing(player, clothingId) {
        const set = player === 'female' ? this.femaleCurrentClothing : this.maleCurrentClothing;
        set.delete(clothingId);
        this.save();
    },

    // Dodaj punkty
    addScore(player, points) {
        if (player === 'female') {
            this.femaleScore += points;
        } else {
            this.maleScore += points;
        }
        this.save();
    }
};

export default gameState;
