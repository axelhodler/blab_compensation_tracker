function TimeSpent(members, timespentSubmitterId) {
  this._timespentSubmitterId = timespentSubmitterId.submitter();
  this._isValid = false;
  this._membersHavingVerified = [];

  this.verify = function(verifierId) {
    if (notTryingToSelfValidate.call(this, verifierId)) {
      if (hasNotVerifiedYet.call(this, verifierId)) {
        this._membersHavingVerified.push(verifierId);
        if (enoughValidationsReached.call(this)) {
          this._isValid = true;
        }
      }
    }
  };

  this.isValid = function() {
    return this._isValid;
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