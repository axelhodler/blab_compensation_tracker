var Report = require('../../src/model/report');

module.exports = function() {
  var listOfReports,
    report;

  this.Given(/^an unverified report "([^"]*)" by member (\d+)$/, function(reportId, memberId) {
    reports.add(new Report(reportId, memberId));
  });

  this.Given(/^a verified report "([^"]*)" by member (\d+)$/, function (reportId, memberId) {
    var report = new Report(reportId, memberId);
    report.makeValid();
    reports.add(report);
  });

  this.When(/^fetching a list of unverified reports$/, function() {
    listOfReports = reports.list();
  });

  this.When(/^fetch unverified report "([^"]*)"$/, function(reportId) {
    report = reports.fetch(reportId);
  });

  this.When(/^fetching a list of verified reports$/, function() {
    listOfReports = reports.verified();
  });

  this.Then(/^the list consists of the report "([^"]*)" by member (\d+)$/, function(reportId, memberId) {
    expect(Object.keys(listOfReports).length).to.equal(1);
    expect(listOfReports[0].id()).to.equal(reportId);
    expect(listOfReports[0].submitter()).to.equal(memberId);
  });

  this.Then(/^the result is the report "([^"]*)" by member (\d+)$/, function(reportId, memberId) {
    expect(report.id()).to.equal(reportId);
    expect(report.submitter()).to.equal(memberId);
  });

};
