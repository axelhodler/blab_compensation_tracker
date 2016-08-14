var Member = require('../../src/model/member');
var Submission = require('../../src/model/submission');

module.exports = function() {
  var submission;

  this.Given(/^a member (\d+)$/, function (id) {
    new Member(id);
  });

  this.When(/^member (\d+) submits his time spent$/, function (memberId) {
    submission = new Submission(memberId);
  });

  this.Then(/^his submission is not yet verified$/, function () {
    expect(submission.isVerified()).to.be.false;
  });
};
