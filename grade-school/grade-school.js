var School = function() {
  School.prototype.add = function(name, grade) {
    this.name = name;
    this.grade = grade;
  };
  School.prototype.roster = function() {
    var roster = {};

    return roster;
  };
};

module.exports = School;
