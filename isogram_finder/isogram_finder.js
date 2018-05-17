const IsogramFinder = function (word) {
  this.word = word.toLowerCase().split('');
}

IsogramFinder.prototype.isIsogram = function () {

  function letterFrequencies(word) {
    let frequencies = {};
    word.map((letter) => {
      if (frequencies[letter]) {
        frequencies[letter] += 1;
      } else {
        frequencies[letter] = 1;
      }
    });
    return frequencies;
  }

  const lettersObject = letterFrequencies(this.word);

  return !this.word.some(letter => lettersObject[letter] > 1);



  // const hasDuplicateLetters = this.word.some((letter, index) => {
  //   let copyOfWord = this.word.slice(0);
  //   copyOfWord.splice(index, 1);
  //   return copyOfWord.includes(letter);
  // });

  return !hasDuplicateLetters;

}

module.exports = IsogramFinder;
