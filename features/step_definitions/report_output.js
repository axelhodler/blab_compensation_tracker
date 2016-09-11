var Report = require('../../src/model/report');
var UserReport = require('../../src/model/user_report');
var UserChosenReportContents = require('../../src/model/user_chosen_report_contents');

module.exports = function() {

  this.Given(/^an input of (\d+) hours which achieved output of "([^"]*)" on date "([^"]*)" by member (\d+)$/, function (hoursSpent, outputDescription, date, memberId) {
    var r = new UserReport(new UserChosenReportContents(hoursSpent, outputDescription, date), memberId);
    reports.add(new Report(r.hash(), r._memberId, userChosenReportContents));
  });

};