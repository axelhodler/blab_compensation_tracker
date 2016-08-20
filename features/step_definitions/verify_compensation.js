var TimeSpent = require('../../src/model/time_spent');
var Report = require('../../src/model/report');

module.exports = function() {
  var timeSpent,
    report;

  this.Given(/^report of member (\d+)$/, function(memberId) {
    report = new Report(null, memberId);
    timeSpent = new TimeSpent(members, report);
  });

  this.Given(/^member (\d+) has verified timespent$/, function(memberId) {
    timeSpent.verify(memberId);
  });

  this.Given(/^following members exist:$/, function (table) {
    table.rows().forEach(function(memberId) {
      members.add(memberId);
    });
  });

  this.When(/^member (\d+) verifies timespent$/, function(memberId) {
    timeSpent.verify(memberId);
  });

  this.Then(/^timespent is verified$/, function() {
    expect(timeSpent.isValid()).to.be.true;
  });

  this.Then(/^timespent is not verified$/, function () {
    expect(timeSpent.isValid()).to.be.false;
  });
};
