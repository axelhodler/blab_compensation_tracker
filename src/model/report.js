function Report(reportId, memberId) {
  this._reportId = reportId;
  this._memberId = memberId;
  this._isValid = false;
  this._membersHavingVerified = [];

  this.id = function() {
    return this._reportId;
  };

  this.submitter = function() {
    return this._memberId;
  };

  this.makeValid = function() {
    this._isValid = true;
  };

  this.isValid = function() {
    return this._isValid;
  };
}

module.exports = Report;