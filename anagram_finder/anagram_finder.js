const AnagramFinder = function (word) {
  this.word = word.toLowerCase();
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {

  function calculateLetterFrequencies(word) {
    frequenciesObject = {};
    word.split('').map((letter) => {
      if (frequenciesObject[letter]) {
        frequenciesObject[letter] += 1;
      } else {
        frequenciesObject[letter] = 1;
      }
    });
    return frequenciesObject;
  }

  function frequenciesObjectsAreTheSame(word, object1, object2) {

    if (word.split('').every(letter=> object1[letter] === object2[letter])) {
      return true;
    } else {
      return false;
    }
  }

  function wordsAreNotTheSame(word, otherWord) {
    return word !== otherWord;
  }

  function frequencyObjectLengthsAreEqual(object1, object2) {
      return Object.keys(object1).length === Object.keys(object2).length;
  }

  function otherWordIsAnagram(word, otherWord) {
      wordFrequencies = calculateLetterFrequencies(word);
      otherWordFrequencies = calculateLetterFrequencies(otherWord);

      if (wordsAreNotTheSame(word, otherWord) && frequencyObjectLengthsAreEqual(wordFrequencies, otherWordFrequencies) && frequenciesObjectsAreTheSame(word, wordFrequencies, otherWordFrequencies)) {
        return true;
      } else {
        return false;
      }
  }



  return otherWords.filter(word => otherWordIsAnagram(this.word, word.toLowerCase()));
}

module.exports = AnagramFinder;
