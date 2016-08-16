var Submission = require('../../src/model/submission');

module.exports = function() {
  var submission;

  this.Given(/^a time spent submission of member (\d+)$/, function(memberId) {
    submission = new Submission(memberId);
  });

  this.Given(/^member (\d+) has verified the submission$/, function(memberId) {
    submission.verify(memberId);
  });

  this.When(/^member (\d+) verifies the submission$/, function(memberId) {
    submission.verify(memberId);
  });

  this.Then(/^the submission is verified$/, function() {
    expect(submission.isVerified()).to.be.true;
  });
};
