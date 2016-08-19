function Reports() {
  this._reports = [];
  this.add = function(report) {
    this._reports.push(report)
  };

  this.list = function() {
    return this._reports;
  };
}

module.exports = Reports;