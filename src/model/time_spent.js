function TimeSpent(members, timespentSubmitterId) {
  this._report = timespentSubmitterId;
  this._timespentSubmitterId = timespentSubmitterId.submitter();
  this._membersHavingVerified = [];

  this.verify = function(verifierId, reportId) {
    if (notTryingToSelfValidate.call(this, verifierId)) {
      if (hasNotVerifiedYet.call(this, verifierId)) {
        this._membersHavingVerified.push(verifierId);
        if (enoughValidationsReached.call(this)) {
          this._report.makeValid();
        }
      }
    }
  };

  this.isValid = function() {
    return this._report.isValid();
  };

  function notTryingToSelfValidate(verifierId) {
    return this._timespentSubmitterId !== verifierId;
  }

  function hasNotVerifiedYet(verifierId) {
    return this._membersHavingVerified.indexOf(verifierId) === -1;
  }

  function enoughValidationsReached() {
    return this._membersHavingVerified.length === members.requiredMajority();
  }

}

module.exports = TimeSpent;