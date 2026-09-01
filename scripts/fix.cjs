const fs = require('fs');

let data = fs.readFileSync('src/js/data.js', 'utf8');
data = data.replace(/(\{\s*id\s*:\s*'([a-zA-Z_]+)'[^}]*emoji\s*:\s*)Icons\.[^,\s}]+([^}]*\})/g, "$1Icons.$2$3");
data = data.replace(/Icons\.⚡/g, 'Icons.czas');
data = data.replace(/Icons\.🎮/g, 'Icons.gra');
data = data.replace(/Icons\.🔥/g, 'Icons.ogień');
fs.writeFileSync('src/js/data.js', data);

let gameData = fs.readFileSync('src/js/screens/game.js', 'utf8');
gameData = gameData.replace(/<span class="emoji">(.*?)<\/span>/g, '<span class="icon">$1</span>');
fs.writeFileSync('src/js/screens/game.js', gameData);

let lenData = fs.readFileSync('src/js/screens/game-length.js', 'utf8');
lenData = lenData.replace(/<span class="emoji">(.*?)<\/span>/g, '<span class="icon">$1</span>');
fs.writeFileSync('src/js/screens/game-length.js', lenData);

let finData = fs.readFileSync('src/js/screens/finale.js', 'utf8');
finData = finData.replace(/<span class="emoji">(.*?)<\/span>/g, '<span class="icon">$1</span>');
finData = finData.replace(/<span class="check-emoji">(.*?)<\/span>/g, '<span class="check-icon">$1</span>');
fs.writeFileSync('src/js/screens/finale.js', finData);

let actData = fs.readFileSync('src/js/screens/activities.js', 'utf8');
actData = actData.replace(/<span class="emoji">(.*?)<\/span>/g, '<span class="icon">$1</span>');
actData = actData.replace(/<span class="check-emoji">(.*?)<\/span>/g, '<span class="check-icon">$1</span>');
fs.writeFileSync('src/js/screens/activities.js', actData);

let accData = fs.readFileSync('src/js/screens/accessories.js', 'utf8');
accData = accData.replace(/<span class="emoji">(.*?)<\/span>/g, '<span class="icon">$1</span>');
accData = accData.replace(/<span class="check-emoji">(.*?)<\/span>/g, '<span class="check-icon">$1</span>');
fs.writeFileSync('src/js/screens/accessories.js', accData);

let cloData = fs.readFileSync('src/js/screens/clothing.js', 'utf8');
cloData = cloData.replace(/<span class="emoji">(.*?)<\/span>/g, '<span class="icon">$1</span>');
cloData = cloData.replace(/<span class="check-emoji">(.*?)<\/span>/g, '<span class="check-icon">$1</span>');
fs.writeFileSync('src/js/screens/clothing.js', cloData);

let resData = fs.readFileSync('src/js/screens/results.js', 'utf8');
resData = resData.replace(/<span class="emoji">(.*?)<\/span>/g, '<span class="icon">$1</span>');
fs.writeFileSync('src/js/screens/results.js', resData);

let handData = fs.readFileSync('src/js/screens/handoff.js', 'utf8');
handData = handData.replace(/<span class="emoji">(.*?)<\/span>/g, '<span class="icon">$1</span>');
fs.writeFileSync('src/js/screens/handoff.js', handData);

let startData = fs.readFileSync('src/js/screens/start.js', 'utf8');
startData = startData.replace(/<span class="emoji">(.*?)<\/span>/g, '<span class="icon">$1</span>');
fs.writeFileSync('src/js/screens/start.js', startData);
