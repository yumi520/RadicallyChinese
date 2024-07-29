const { startGame } = require('./gameLogic');
const { getRandom } = require('./utils');
const { getAllRadicals } = require('./radicals');

//start the game with a random radical
let initialRandomRadical = getRandom(getAllRadicals());
startGame(initialRandomRadical);



