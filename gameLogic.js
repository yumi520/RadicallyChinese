// game.js
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

const { getRadicalNum, fetchCharacters, checksRadicals, getAllRadicals } = require('./radicals');
const { getRandom, addSpace } = require('./utils.js');

let accumlatedPoints = 0;

function startGame(currentRandomRadical) {
    rl.question(`What character has the radical: ${currentRandomRadical}?`, async (answer) => {
        let numOfRadical = getRadicalNum(currentRandomRadical);
        const allCharasWithRadical = await fetchCharacters(numOfRadical);


        if (checksRadicals(answer, allCharasWithRadical)) {
            
            console.log(`${addSpace}-----------------------\n good job! here's the next question:`);
            accumlatedPoints++;
            let randomRadicalEverytime = getRandom(getAllRadicals());
            startGame(randomRadicalEverytime);
        // } else if (answer === "hint") {
        //     console.log("the hint is cat.")
        } else {
            console.log(`${addSpace}-----------------------\n you lost! Here's how many you got right: ${accumlatedPoints}`);
            rl.close();
        };
    });
}

module.exports = { startGame };
