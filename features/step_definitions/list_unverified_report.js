var Report = require('../../src/model/report');
var Reports = require('../../src/model/reports');

module.exports = function() {
  var reports,
    listOfReports,
    report;

  this.Given(/^an unverified report "([^"]*)" by member (\d+)$/, function(reportId, memberId) {
    reports = new Reports();
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

  this.When(/^adding an unverified report "([^"]*)" by member (\d+)$/, function(reportId, memberId) {
    reports.add(new Report(reportId, memberId));
  });

  this.When(/^fetch unverified report "([^"]*)"$/, function(reportId) {
    report = reports.fetch(reportId);
  });

  this.When(/^fetching a list of verified reports$/, function() {
    listOfReports = reports.verified();
  });

  this.Then(/^the list consists of the report "([^"]*)" by member (\d+)$/, function(reportId, memberId) {
    listOfReports = reports.list();
    expect(Object.keys(listOfReports).length).to.equal(1);
    expect(listOfReports[reportId].id()).to.equal(reportId);
    expect(listOfReports[reportId].submitter()).to.equal(memberId);
  });

  this.Then(/^the result is the report "([^"]*)" by member (\d+)$/, function(reportId, memberId) {
    expect(report.id()).to.equal(reportId);
    expect(report.submitter()).to.equal(memberId);
  });

};
