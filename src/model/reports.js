function Reports() {
  this._reports = {};
  this.add = function(report) {
    if (reportNotAlreadyAdded.call(this, report)) {
      this._reports[report.id()] = report;
    }
  };

  this.unverified = function() {
    return Object.keys(this._reports).map(function(key) {
      return this._reports[key];
    }.bind(this)).filter(function(report) {
      return !report.isValid();
    });
  };

  this.verified = function() {
    return Object.keys(this._reports).map(function(key) {
      return this._reports[key];
    }.bind(this)).filter(function(report) {
      return report.isValid();
    });
  };

  this.fetch = function(reportId) {
    return this._reports[reportId];
  };

  function reportNotAlreadyAdded(report) {
    return !this._reports[report.id()];
  }

}

module.exports = Reports;