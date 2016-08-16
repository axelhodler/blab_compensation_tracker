var TimeSpent = require('../../src/model/time_spent');

module.exports = function() {
  var timeSpent;

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
};
