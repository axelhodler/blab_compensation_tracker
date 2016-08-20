function Report(reportId, memberId) {
  this._reportId = reportId;
  this._memberId = memberId;
  this._isValid = false;
  this._membersHavingVerified = [];

  this.id = function() {
    return this._reportId;
  };

  this.notTryingToSelfValidate = function(verifierId) {
    return this._memberId !== verifierId;
  };

  this.hasNotVerifiedYet = function(verifierId) {
    return this._membersHavingVerified.indexOf(verifierId) === -1;
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