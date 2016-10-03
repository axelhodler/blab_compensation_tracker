function Reports() {
  this._reports = {};
  this.add = function(report) {
    if (reportNotAlreadyAdded.call(this, report)) {
      this._reports[report.id] = report;
    }
    return report;
  };

  this.unverified = function() {
    return this.allPublished().filter(function(report) {
      return !report.isValid();
    });
  };

  this.verified = function() {
    return this.allPublished().filter(function(report) {
      return report.isValid();
    });
  };

  this.allPublished = function() {
    return Object.keys(this._reports).map(function(key) {
      return this._reports[key];
    }.bind(this)).filter(function(report) {
      return report.published;
    });
  };

  this.fetch = function(reportId) {
    return this._reports[reportId];
  };

  function reportNotAlreadyAdded(report) {
    if (this._reports[report.id]) {
      throw Error('Adding would have created a duplicate report id');
    } else {
      return true;
    }
  }

}

module.exports = Reports;