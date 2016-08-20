function Verification(members, reports) {
  this._reports = reports;

  this.verify = function(verifierId, reportId) {
    var report = reports.fetch(reportId);
    if (notTryingToSelfValidate(verifierId, report.submitter())) {
      if (hasNotVerifiedYet(verifierId, report._membersHavingVerified)) {
        report._membersHavingVerified.push(verifierId);
        if (enoughValidationsReached(report._membersHavingVerified)) {
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