function Verification(members, report) {
  this._report = report;
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

  function notTryingToSelfValidate(verifierId) {
    return this._report.submitter() !== verifierId;
  }

  function hasNotVerifiedYet(verifierId) {
    return this._membersHavingVerified.indexOf(verifierId) === -1;
  }

  function enoughValidationsReached() {
    return this._membersHavingVerified.length === members.requiredMajority();
  }

}

module.exports = Verification;