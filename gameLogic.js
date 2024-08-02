// game.js
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

const { getRadicalNum, fetchCharacters, checksRadicals, getAllRadicals } = require('./radicals');
const { getRandom, addSpace } = require('./utils.js');
const { getDefinition } = require('./definition.js');

let accumlatedPoints = 0;
let hintGiven = false;

function startGame(currentRandomRadical) {
    rl.question(`What character has the radical: ${currentRandomRadical}? \n> `, async (answer) => {
        let numOfRadical = getRadicalNum(currentRandomRadical);
        const allCharasWithRadical = await fetchCharacters(numOfRadical);

        if (answer === "hint") {
            let definition = getDefinition(currentRandomRadical);
            console.log(`Here's the definition of ${currentRandomRadical}: ${definition}`);
            hintGiven = true;

            //prompt the user again so it doesnt exit the game
            startGame(currentRandomRadical);
            return;
        }

        if (checksRadicals(answer, allCharasWithRadical)) {
            
            console.log(`${addSpace}-----------------------\n good job! here's the next question:`);
            accumlatedPoints++;
            hintGiven = false;
            let randomRadicalEverytime = getRandom(getAllRadicals());
            startGame(randomRadicalEverytime);
        } else {
            console.log(`${addSpace}-----------------------\n you lost! Here's how many you got right: ${accumlatedPoints}`);
            rl.close();
        };
    });
}

module.exports = { startGame };
