function Report(reportId, memberId) {
  this._reportId = reportId;
  this._memberId = memberId;
  this._isValid = false;
  this._membersHavingVerified = [];

  this.id = function() {
    return this._reportId;
  };

  this.verifyBy = function(verifierId) {
    if (notTryingToSelfValidate.call(this, verifierId)) {
      if (hasNotVerifiedYet.call(this, verifierId)) {
        this._membersHavingVerified.push(verifierId);
      }
    }
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

  function notTryingToSelfValidate(verifierId) {
    return this._memberId !== verifierId;
  }

  function hasNotVerifiedYet(verifierId) {
    return this._membersHavingVerified.indexOf(verifierId) === -1;
  }
}

module.exports = Report;