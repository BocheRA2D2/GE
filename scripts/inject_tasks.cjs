const fs = require('fs');
const dataContent = fs.readFileSync('src/js/data.js', 'utf8');
const updatedTasks = fs.readFileSync('tasks_updated.json', 'utf8');

// Znajdź indeks początku i końca tablicy tasks
const startIndex = dataContent.indexOf('export const tasks = [');
if (startIndex === -1) {
    console.error('Nie znaleziono export const tasks = [');
    process.exit(1);
}

// Znajdź koniec tablicy tasks
// Ponieważ na dole nie ma zbyt wiele (jest to ostatnia część pliku, ale dla pewności znajdziemy ostatni bracket)
// Będziemy iterować nawiasy.

let openBrackets = 0;
let endIndex = -1;
let started = false;

for (let i = startIndex + 'export const tasks = '.length; i < dataContent.length; i++) {
    if (dataContent[i] === '[') {
        openBrackets++;
        started = true;
    } else if (dataContent[i] === ']') {
        openBrackets--;
        if (started && openBrackets === 0) {
            endIndex = i;
            break;
        }
    }
}

if (endIndex === -1) {
    console.error('Nie znaleziono końca tablicy tasks');
    process.exit(1);
}

const newDataContent = dataContent.substring(0, startIndex) + 'export const tasks = ' + updatedTasks + dataContent.substring(endIndex + 1);
fs.writeFileSync('src/js/data.js', newDataContent);
console.log('Plik data.js zaktualizowany pomyślnie!');
