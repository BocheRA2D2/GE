import { tasks, stageConfig, challengeModifiers, scoring, bodyAreas, femaleClothingItems, maleClothingItems } from '../src/js/data.js';

function isTaskAvailable(task, gameState, player) {
  if (task.gender !== 'both' && task.gender !== player) return false;
  if (gameState.usedTaskIds.has(task.id)) return false;

  const activities = player === 'female' ? gameState.femaleActivities : gameState.maleActivities;
  const clothing = player === 'female' ? gameState.femaleCurrentClothing : gameState.maleCurrentClothing;

  if (task.requiresActivities && task.requiresActivities.length > 0) {
    for (const act of task.requiresActivities) {
      if (!activities.includes(act)) return false;
    }
  }
  if (task.requiresClothing && task.requiresClothing.length > 0) {
    for (const c of task.requiresClothing) {
      if (!clothing.has(c)) return false;
    }
  }
  if (task.requiresNoClothing && task.requiresNoClothing.length > 0) {
    for (const c of task.requiresNoClothing) {
      if (clothing.has(c)) return false;
    }
  }
  if (task.requiresAccessories && task.requiresAccessories.length > 0) {
    for (const acc of task.requiresAccessories) {
      if (!gameState.accessories.includes(acc)) return false;
    }
  }
  return true;
}

function getObstacles(task, gameState, activePlayer) {
    if (!task.targetArea || !bodyAreas[task.targetArea]) return '';
    const passivePlayer = activePlayer === 'female' ? 'male' : 'female';
    const passiveClothing = passivePlayer === 'female' ? gameState.femaleCurrentClothing : gameState.maleCurrentClothing;
    const blockingIds = bodyAreas[task.targetArea];
    
    const obstacles = [];
    const allClothingItems = passivePlayer === 'female' ? femaleClothingItems : maleClothingItems;
    
    for (const id of blockingIds) {
      if (passiveClothing.has(id)) {
        const itemDef = allClothingItems.find(c => c.id === id);
        if (itemDef) obstacles.push(itemDef.label.toLowerCase());
      }
    }
    return obstacles.join(', ');
}

function simulateGame(gameId, config) {
    console.log(`\n==========================================`);
    console.log(`GRA ${gameId}: ${config.name}`);
    console.log(`Długość: ${config.length}`);
    console.log(`Ona ubrania na starcie: ${Array.from(config.gameState.femaleCurrentClothing).join(', ')}`);
    console.log(`On ubrania na starcie: ${Array.from(config.gameState.maleCurrentClothing).join(', ')}`);
    console.log(`Akcesoria: ${config.gameState.accessories.join(', ')}`);
    console.log(`==========================================\n`);

    const stages = stageConfig[config.length];
    let currentPlayer = 'female';
    let gameState = config.gameState;

    for (let stageIndex = 0; stageIndex < stages.length; stageIndex++) {
        const targetStage = stageIndex === 4 ? 5 : stageIndex + 1;
        const totalInStage = stages[stageIndex];
        console.log(`\n--- ETAP ${targetStage} (Zadań: ${totalInStage}) ---`);

        for (let t = 0; t < totalInStage; t++) {
            // Draw task
            let available = tasks.filter(task => task.stage === targetStage && isTaskAvailable(task, gameState, currentPlayer));
            if (available.length === 0) available = tasks.filter(task => isTaskAvailable(task, gameState, currentPlayer));
            if (available.length === 0) {
                gameState.usedTaskIds.clear();
                available = tasks.filter(task => isTaskAvailable(task, gameState, currentPlayer));
            }
            if (available.length === 0) {
                console.log(`Tura ${t+1} (${currentPlayer}): BRAK ZADAŃ!`);
                currentPlayer = currentPlayer === 'female' ? 'male' : 'female';
                continue;
            }

            const task = available[Math.floor(Math.random() * available.length)];
            gameState.usedTaskIds.add(task.id);

            const obstacles = getObstacles(task, gameState, currentPlayer);
            const obstacleText = obstacles ? `[PRZESZKODY U PARTNERA: ${obstacles}]` : '';

            console.log(`Tura ${t+1} (${currentPlayer}): [${task.id}] ${task.text.substring(0, 70)}... ${obstacleText}`);

            // Simulate task finish -> remove clothes if any
            if (task.removesClothing && task.removesClothing.length > 0) {
                const targetClothing = currentPlayer === 'female' ? gameState.femaleCurrentClothing : gameState.maleCurrentClothing;
                for (const c of task.removesClothing) {
                    if (targetClothing.has(c)) {
                        targetClothing.delete(c);
                        console.log(`   -> AKCJA: ${currentPlayer} ściąga: ${c}`);
                    }
                }
            }

            currentPlayer = currentPlayer === 'female' ? 'male' : 'female';
        }
    }
}

const allActs = ['calowanie', 'masaz', 'taniec', 'szeptanie', 'oral_dawanie', 'oral_otrzymywanie', 'palcowka', 'stosunek', 'wiazanie', 'klapsy', 'gryzienie', 'dominacja', 'noszenie'];

// Config 1: Klasycznie
simulateGame(1, {
    name: "Zwyczajny wieczór",
    length: "short",
    gameState: {
        usedTaskIds: new Set(),
        femaleActivities: allActs, maleActivities: allActs,
        femaleCurrentClothing: new Set(['sukienka', 'majtki', 'stanik']),
        maleCurrentClothing: new Set(['spodnie', 'koszulka', 'bokserki']),
        accessories: ['zel']
    }
});

// Config 2: Nago
simulateGame(2, {
    name: "Oboje nago od początku",
    length: "short",
    gameState: {
        usedTaskIds: new Set(),
        femaleActivities: allActs, maleActivities: allActs,
        femaleCurrentClothing: new Set(),
        maleCurrentClothing: new Set(),
        accessories: []
    }
});

// Config 3: Tylko masaż i całowanie, grube ciuchy
simulateGame(3, {
    name: "Zima - bez seksu",
    length: "short",
    gameState: {
        usedTaskIds: new Set(),
        femaleActivities: ['calowanie', 'masaz'], maleActivities: ['calowanie', 'masaz'],
        femaleCurrentClothing: new Set(['spodnie', 'bluza', 'majtki', 'stanik']),
        maleCurrentClothing: new Set(['spodnie', 'bluza', 'bokserki']),
        accessories: ['wibrator']
    }
});

// Config 4: Brak dolnej bielizny u kobiety
simulateGame(4, {
    name: "Letnia sukienka bez majtek",
    length: "short",
    gameState: {
        usedTaskIds: new Set(),
        femaleActivities: allActs, maleActivities: allActs,
        femaleCurrentClothing: new Set(['sukienka']), // bez majtek!
        maleCurrentClothing: new Set(['spodenki', 'bokserki']),
        accessories: ['kostka_lodu']
    }
});

// Config 5: Medium game, BDSM vibes
simulateGame(5, {
    name: "BDSM Vibe - długa",
    length: "medium",
    gameState: {
        usedTaskIds: new Set(),
        femaleActivities: ['wiazanie', 'klapsy', 'dominacja', 'duszenie_lekkie', 'stosunek', 'oral_dawanie', 'oral_otrzymywanie'],
        maleActivities: ['wiazanie', 'klapsy', 'dominacja', 'duszenie_lekkie', 'stosunek', 'oral_dawanie', 'oral_otrzymywanie'],
        femaleCurrentClothing: new Set(['kabaretki', 'szpilki', 'majtki', 'stanik']),
        maleCurrentClothing: new Set(['spodnie', 'koszula']),
        accessories: ['kajdanki', 'knebel', 'szpicruta']
    }
});
