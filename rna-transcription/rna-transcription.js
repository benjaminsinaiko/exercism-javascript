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
  return letters.map(letter => this.dnaToRna[letter]).join("");
  // return this.dnaToRna[dna];
};

module.exports = DnaTranscriber;
