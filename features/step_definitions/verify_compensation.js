var TimeSpent = require('../../src/model/time_spent');
var Members = require('../../src/model/members');

module.exports = function() {
  var timeSpent;
  var members;

  this.Given(/^three members (\d+) (\d+) (\d+)$/, function (firstMemberId,
                                                            secondMemberId,
                                                            thirdMemberId) {
    members = new Members();
    members.add(firstMemberId);
    members.add(secondMemberId);
    members.add(thirdMemberId);
  });

  this.Given(/^timespent of member (\d+)$/, function(memberId) {
    timeSpent = new TimeSpent(memberId);
  });

  this.Given(/^member (\d+) has verified timespent$/, function(memberId) {
    timeSpent.verify(memberId);
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
