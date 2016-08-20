var TimeSpent = require('../../src/model/time_spent');
var Report = require('../../src/model/report');

module.exports = function() {
  var timeSpent,
    report;

  this.Given(/^report of member (\d+) with id "([^"]*)"$/, function (memberId, reportId) {
    report = new Report(reportId, memberId);
    timeSpent = new TimeSpent(members, report);
  });

  this.When(/^member (\d+) verifies report with id "([^"]*)"$/, function (memberId, reportId) {
    timeSpent.verify(memberId, reportId);
  });

  this.Given(/^member (\d+) has verified timespent$/, function(memberId) {
    timeSpent.verify(memberId);
  });

  this.Given(/^following members exist:$/, function (table) {
    table.rows().forEach(function(memberId) {
      members.add(memberId);
    });
  });

  this.Then(/^timespent is verified$/, function() {
    expect(report.isValid()).to.be.true;
  });

  this.Then(/^timespent is not verified$/, function () {
    expect(report.isValid()).to.be.false;
  });
};
