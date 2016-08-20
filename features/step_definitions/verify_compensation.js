var Verification = require('../../src/model/verification');
var Reports = require('../../src/model/reports');
var Report = require('../../src/model/report');

module.exports = function() {
  var verification,
    report,
    reports;

  this.Given(/^report of member (\d+) with id "([^"]*)"$/, function (memberId, reportId) {
    reports = new Reports();
    report = new Report(reportId, memberId);
    reports.add(report);
    verification = new Verification(members, reports);
  });

  this.When(/^member (\d+) verifies report with id "([^"]*)"$/, function (memberId, reportId) {
    verification.verify(memberId, reportId);
  });

  this.Given(/^member (\d+) has verified report with id "([^"]*)"$/, function(memberId, reportId) {
    verification.verify(memberId, reportId);
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
