var Report = require('../../src/model/report');
var Reports = require('../../src/model/reports');

module.exports = function() {
  var reports;
  var listOfReports;

  this.Given(/^an unverified report "([^"]*)" by member (\d+)$/, function(reportId, memberId) {
    reports = new Reports();
    reports.add(new Report(reportId, memberId));
  });

  this.When(/^fetching a list of unverified reports$/, function() {
    listOfReports = reports.list();
  });

  this.Then(/^the list consists of the report "([^"]*)" by member (\d+)$/, function(reportId, memberId) {
    expect(listOfReports.length).to.equal(1);
    expect(listOfReports[0].id()).to.equal(reportId);
    expect(listOfReports[0].submitter()).to.equal(memberId);
  });
};
