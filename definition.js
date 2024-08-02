//file system to read dictionary.txt
const fs = require('fs');
const path = require('path');


let dictionary = [];

fs.readFile('dictionary.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    let dictionaryLines = data.split("\n");

    for (let i = 0; i < dictionaryLines.length; i++) {
      if (dictionaryLines[i].trim() == '') {
        continue;
      } else {
        //parsing each line in dictionary.txt and pushing it
        //to dictionary array
        let obj = JSON.parse(dictionaryLines[i]);
          dictionary.push(obj);
      }
    }
  });

  //getting the defintion for the current radical
  //serves as the hint
  function getDefinition(radical) {
    for (let objects of dictionary) {
        if (radical === objects.character) {
            return objects.definition;
        }
    }
    return radical;
  }


  module.exports = { getDefinition };


