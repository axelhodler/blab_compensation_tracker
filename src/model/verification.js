function Verification(members, reports) {
  this._reports = reports;
  this._membersHavingVerified = [];

  this.verify = function(verifierId, reportId) {
    var report = reports.fetch(reportId);
    if (notTryingToSelfValidate.call(this, verifierId, report.submitter())) {
      if (hasNotVerifiedYet.call(this, verifierId)) {
        this._membersHavingVerified.push(verifierId);
        if (enoughValidationsReached.call(this)) {
          report.makeValid();
        }
      }
    }
  };

  function notTryingToSelfValidate(verifierId, submitterId) {
    return submitterId !== verifierId;
  }

  function hasNotVerifiedYet(verifierId) {
    return this._membersHavingVerified.indexOf(verifierId) === -1;
  }

  function enoughValidationsReached() {
    return this._membersHavingVerified.length === members.requiredMajority();
  }

}

module.exports = Verification;