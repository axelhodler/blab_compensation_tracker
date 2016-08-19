function Report(reportId, memberId) {
  this._reportId = reportId;
  this._memberId = memberId;

  this.id = function() {
    return this._reportId;
  };

  this.submitter = function() {
    return this._memberId;
  }
}

module.exports = Report;