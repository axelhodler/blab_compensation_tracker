var Reports = require('./reports');
var Report = require('./report');
var UserChosenReportContents = require('./user_chosen_report_contents');

var reports;

module.exports = {
  beforeEach: function() {
    reports = new Reports();
  },
  addingReportReturnsReport : function() {
    var report = new Report('someId', 'someSubmitter', new UserChosenReportContents(1, 'foo', new Date()));

    var addedReport = reports.add(report);

    expect(addedReport.id).to.equal('someId');
  },
  addingReportWithSameHashTwiceThrows : function() {
    var report = new Report('someId', 'someSubmitter', new UserChosenReportContents(1, 'foo', new Date()));
    var report2 = new Report('someId', 'someSubmitter', new UserChosenReportContents(2, 'foo', new Date()));

    reports.add(report);

    expect(function() {
      reports.add(report2)
    }).to.throw(Error, 'Adding would have created a duplicate report id');
  }
};