var expect = require('chai').expect;
var Reports = require('./reports');
var Report = require('./report');

module.exports = {
  addingReportReturnsReport : function() {
    var reports = new Reports();
    var report = new Report('someId', 'someSubmitter');

    var addedReport = reports.add(report);

    expect(addedReport.id).to.equal('someId');
  }
};