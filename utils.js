function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

  function getRandom(arr) {
    let randomNum = Math.floor(Math.random() * arr.length);
    //console.log(arr[randomNum]);
    return arr[randomNum];
  };



  module.exports = { removeDuplicates, getRandom };