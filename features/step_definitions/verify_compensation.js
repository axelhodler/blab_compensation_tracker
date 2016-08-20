var Verification = require('../../src/model/verification');
var Report = require('../../src/model/report');

module.exports = function() {
  var timeSpent,
    report;

  this.Given(/^report of member (\d+) with id "([^"]*)"$/, function (memberId, reportId) {
    report = new Report(reportId, memberId);
    timeSpent = new Verification(members, report);
  });

  this.When(/^member (\d+) verifies report with id "([^"]*)"$/, function (memberId, reportId) {
    timeSpent.verify(memberId, reportId);
  });

  this.Given(/^member (\d+) has verified report$/, function(memberId) {
    timeSpent.verify(memberId);
  });

  this.Given(/^following members exist:$/, function (table) {
    table.rows().forEach(function(memberId) {
      members.add(memberId);
    });
  });

  this.Then(/^report is verified$/, function() {
    expect(report.isValid()).to.be.true;
  });

  this.Then(/^report is not verified$/, function () {
    expect(report.isValid()).to.be.false;
  });
};
