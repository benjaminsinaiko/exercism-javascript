function School() {
  var rosterDb = {};

  // Private
  var sort = function(gradeNumber) {
    return rosterDb[gradeNumber].sort();
  };

  // Public
  var roster = function() {
    for (var index in rosterDb) {
      sort(index);
    }
    return rosterDb;
  };

  var add = function(student, grade) {
    if (rosterDb[grade] == undefined) rosterDb[grade] = [];
    rosterDb[grade].push(student);
  };

  var grade = function(grade) {
    if (rosterDb[grade] != undefined) return sort(grade);
    else return (rosterDb[grade] = []);
  };

  return {
    roster: roster,
    add: add,
    grade: grade
  };
}

module.exports = School;
