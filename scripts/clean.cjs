const fs = require('fs');
let data = fs.readFileSync('src/js/data.js', 'utf8');

// The regex matches `emoji: 'ANY_CHARACTER'` and replaces it
data = data.replace(/emoji:\s*'[^']+'/g, (match) => {
    // If it's a stray emoji, just remove the whole emoji key-value pair, or replace it with a valid Icon if it matches
    return `emoji: Icons.gra`; // Fallback for any stray emojis
});

// There is one specific known stray emoji we want to replace
data = data.replace(/emoji: '💇'/g, "emoji: Icons.ciagnięcie_wlosow");

fs.writeFileSync('src/js/data.js', data);
