var DnaTranscriber = function() {
  this.dnaToRna = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  };
};

DnaTranscriber.prototype.toRna = function(dna) {
  var letters = dna.split("");
  var that = this;
  letters.forEach(function(letter) {
    if (that.dnaToRna.hasOwnProperty(letter) === false) {
      throw new Error("Invalid input");
    }
  });
  return letters.map(letter => this.dnaToRna[letter]).join("");
};

module.exports = DnaTranscriber;
