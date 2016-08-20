function Reports() {
  this._reports = {};
  this.add = function(report) {
    if (reportNotAlreadyAdded.call(this, report)) {
      this._reports[report.id()] = report.submitter();
    }
  };

  this.list = function() {
    return this._reports;
  };

  this.fetch = function(reportId) {
    return this._reports[reportId];
  };

  function reportNotAlreadyAdded(report) {
    return !this._reports[report.id()];
  }

}

module.exports = Reports;