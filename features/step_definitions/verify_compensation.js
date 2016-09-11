var ReportVerification = require('../../src/actions/report_verification');
var Report = require('../../src/model/report');

module.exports = function() {
  var reportVerification,
    report;

  this.Given(/^report of member (\d+) with id "([^"]*)"$/, function (memberId, reportId) {
    report = new Report(reportId, memberId, userChosenReportContents);
    reports.add(report);
    reportVerification = new ReportVerification(members, reports);
  });

  this.When(/^member (\d+) verifies report with id "([^"]*)"$/, function (memberId, reportId) {
    reportVerification.verify(memberId, reportId);
  });

  this.Given(/^member (\d+) has verified report with id "([^"]*)"$/, function(memberId, reportId) {
    reportVerification.verify(memberId, reportId);
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
