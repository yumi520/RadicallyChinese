
// //click start button to play the game with directions
// //in the center, a random radical is chosen
// //user will have a limited time to type a chinese word consisting of that radical
// //if it is correct, it will find another radical that can't be a radical that was already chosen before
// //if incorrect, reset the input and make it red with the timer continuing

// //if the timer expires, you lose 
// //you're taken to a losing screen that shows how many points you got

// //file system to read dictionary.txt
// const fs = require('fs');
// const path = require('path');
// //const readLine = require('readline');

// const readline = require('node:readline');
// const { stdin: input, stdout: output } = require('node:process');

// const rl = readline.createInterface({ input, output });

// //file imports
// const { removeDuplicates, getRandom } = require('./utils.js');
// const { startGame } = require('./gameLogic.js');
// const { getRadicalNum, checksRadicals, radicals, fetchCharacters } = require('./radicals.js');


// fs.readFile('dictionary.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     let dictionaryLines = data.split("\n");
//     let arrayOfRadicals = [];
//     let dictionary = [];

//     for (let i = 0; i < dictionaryLines.length; i++) {
//       if (dictionaryLines[i].trim() == '') {
//         continue;
//       } else {
//         //getting the radicals
//         let obj = JSON.parse(dictionaryLines[i]);
//           arrayOfRadicals.push(obj.radical);

//           dictionary.push(obj);
//           //checkCharaForRadical(obj.radical);
//       }
//     }
//     //console.log(arrayOfRadicals);
//     arrayOfRadicals = removeDuplicates(arrayOfRadicals);
//     let currentRandomRadical = getRandom(arrayOfRadicals);
//     console.log(currentRandomRadical)
//     startGame(currentRandomRadical);
//     getRadicalNum(currentRandomRadical);
//   });


const { startGame } = require('./gameLogic');
const { getRandom } = require('./utils');
const { getAllRadicals } = require('./radicals');

// Start the game with a random radical
let initialRandomRadical = getRandom(getAllRadicals());
startGame(initialRandomRadical);



