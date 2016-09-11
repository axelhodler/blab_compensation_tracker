var expect = require('chai').expect;
var Reports = require('./reports');
var Report = require('./report');

var reports;

module.exports = {
  beforeEach: function() {
    reports = new Reports();
  },
  addingReportReturnsReport : function() {
    var report = new Report('someId', 'someSubmitter');

    var addedReport = reports.add(report);

    expect(addedReport.id).to.equal('someId');
  },
  addingReportWithSameHashTwiceThrows : function() {
    var report = new Report('someId', 'someSubmitter');
    var report2 = new Report('someId', 'someSubmitter');

    reports.add(report);

    expect(function() {
      reports.add(report2)
    }).to.throw(Error, 'Adding would have created a duplicate report id');
  }
};