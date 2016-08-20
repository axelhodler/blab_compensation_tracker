function Reports() {
  this._reports = {};
  this.add = function(report) {
    if (reportNotAlreadyAdded.call(this, report)) {
      this._reports[report.id()] = report;
    }
  };

  this.list = function() {
    return Object.keys(this._reports).map(function(key) {
      return this._reports[key];
    }.bind(this));
  };

  this.fetch = function(reportId) {
    return this._reports[reportId];
  };

  function reportNotAlreadyAdded(report) {
    return !this._reports[report.id()];
  }

}

module.exports = Reports;