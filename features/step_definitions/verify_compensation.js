var TimeSpent = require('../../src/model/time_spent');
var Members = require('../../src/model/members');

module.exports = function() {
  var timeSpent;
  var members;

  this.Given(/^timespent of member (\d+)$/, function(memberId) {
    timeSpent = new TimeSpent(memberId);
  });

  this.Given(/^member (\d+) has verified timespent$/, function(memberId) {
    timeSpent.verify(memberId);
  });

  this.Given(/^following members exist:$/, function (table) {
    members = new Members();
    table.rows().forEach(function(memberId) {
      members.add(memberId);
    });
  });

  this.When(/^member (\d+) verifies timespent$/, function(memberId) {
    timeSpent.verify(memberId);
  });

  this.Then(/^timespent is verified$/, function() {
    expect(timeSpent.isVerified()).to.be.true;
  });

  this.Then(/^timespent is not verified$/, function () {
    expect(timeSpent.isVerified()).to.be.false;
  });
};
