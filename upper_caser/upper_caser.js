const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function (wordsArray) {
    return this.words.map(word => word.toUpperCase());
}

module.exports = UpperCaser;
