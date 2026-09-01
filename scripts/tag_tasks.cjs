const fs = require('fs');
const tasks = JSON.parse(fs.readFileSync('tasks_dump.json', 'utf8'));

// Regexy do dopasowań (case-insensitive)
const regexBottom = /(poślad|pup|ud[ao]|majt|łon|cip|penis|kutas|jaj|człon|krocz|kutas)/i;
const regexChest = /(pierś|piersi|cyc|biust|sut|dekolt|klat|brzuch|pęp|koszul|top|stanik|bluz|tors)/i;
const regexFeet = /(stop|palc(e|ach) u stóp|pięt|kostk|but|skarp|pończ|rajst)/i;

const regexRemove = /(zdejmij|ściągnij|rozepnij|pozbądź się)/i;

// Słownik ubrań do szukania w tekście przy ściąganiu
const clothingMap = {
    'stanik': 'stanik',
    'koszul': 'koszulka', // lub koszula, uprośćmy do koszulka
    'spodni': 'spodnie',
    'majt': 'majtki',
    'rajst': 'rajstopy',
    'skarpet': 'skarpetki',
    'sukienk': 'sukienka',
    'spódnic': 'spodniczka'
};

let stats = {
    targetAreaBottom: 0,
    targetAreaChest: 0,
    targetAreaFeet: 0,
    requiresClothing: 0,
    removesClothing: 0
};

tasks.forEach(task => {
    const text = task.text.toLowerCase();
    
    // 1. Target Area
    if (!task.targetArea) {
        if (regexBottom.test(text)) {
            task.targetArea = 'bottom';
            stats.targetAreaBottom++;
        } else if (regexChest.test(text)) {
            task.targetArea = 'chest';
            stats.targetAreaChest++;
        } else if (regexFeet.test(text)) {
            task.targetArea = 'feet';
            stats.targetAreaFeet++;
        }
    }

    // 2. Removes / Requires Clothing
    if (regexRemove.test(text)) {
        let itemsFound = new Set();
        for (const [key, id] of Object.entries(clothingMap)) {
            if (text.includes(key)) {
                itemsFound.add(id);
            }
        }
        
        if (itemsFound.size > 0) {
            const items = Array.from(itemsFound);
            
            if (!task.requiresClothing) {
                task.requiresClothing = items;
                stats.requiresClothing++;
            }
            if (!task.removesClothing) {
                task.removesClothing = items;
                stats.removesClothing++;
            }
        }
    }
});

fs.writeFileSync('tasks_updated.json', JSON.stringify(tasks, null, 2));
console.log('--- STATYSTYKI ZMIAN ---');
console.log(stats);
