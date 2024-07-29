// game.js
const readline = require('node:readline');
const { getRadicalNum, fetchCharacters, checksRadicals, getAllRadicals } = require('./radicals');

const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

const { getRandom } = require('./utils.js');



 function startGame(currentRandomRadical) {
    rl.question(`What character has the radical: ${currentRandomRadical}?`, async (answer) => {
        //console.log(`this is userInput: ${answer}`)
        let numOfRadical = getRadicalNum(currentRandomRadical);
        const allCharasWithRadical = await fetchCharacters(numOfRadical);


        if (checksRadicals(answer, allCharasWithRadical)) {
            console.log(`-----------------------\ngood job! here's the next question:`);
            let randomRadicalEverytime = getRandom(getAllRadicals());
            startGame(randomRadicalEverytime);
        } else {
            console.log(`you lost!`);
            rl.close();
        };
    });
}

module.exports = { startGame };
