var Member = require('../../src/model/member');
var TimeSpent = require('../../src/model/time_spent');

module.exports = function() {
  var timeSpent;

  this.Given(/^a member (\d+)$/, function (id) {
    new Member(id);
  });

  this.When(/^member (\d+) submits his timespent$/, function (memberId) {
    timeSpent = new TimeSpent(memberId);
  });

  this.Then(/^timespent is not yet verified$/, function () {
    expect(timeSpent.isVerified()).to.be.false;
  });
};
