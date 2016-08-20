function Verification(members, reports) {
  this._reports = reports;

  this.verify = function(verifierId, reportId) {
    var report = reports.fetch(reportId);
    if (notTryingToSelfValidate.call(this, verifierId, report.submitter())) {
      if (hasNotVerifiedYet.call(this, verifierId, report._membersHavingVerified)) {
        report._membersHavingVerified.push(verifierId);
        if (enoughValidationsReached.call(this, report._membersHavingVerified)) {
          report.makeValid();
        }
      }
    }
  };

  function notTryingToSelfValidate(verifierId, submitterId) {
    return submitterId !== verifierId;
  }

  function hasNotVerifiedYet(verifierId, membersHavingVerified) {
    return membersHavingVerified.indexOf(verifierId) === -1;
  }

  function enoughValidationsReached(membersHavingVerified) {
    return membersHavingVerified.length === members.requiredMajority();
  }

}

module.exports = Verification;