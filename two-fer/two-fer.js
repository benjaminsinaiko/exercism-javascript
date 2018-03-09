var TwoFer = function() {};

TwoFer.prototype.twoFer = function(who) {
  var name = who;
  if (name === null) {
    return "One for you, one for me.";
  } else {
    return "Hello";
  }
};

module.exports = TwoFer;
