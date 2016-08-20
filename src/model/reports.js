function Reports() {
  this._reports = {};
  this.add = function(report) {
    this._reports[report.id()] = report.submitter();
  };

  this.list = function() {
    return this._reports;
  };

  this.fetch = function(reportId) {
    return this._reports[reportId];
  }
}

module.exports = Reports;