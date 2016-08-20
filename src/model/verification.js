function Verification(members, reports) {
  this._reports = reports;

  this.verify = function(verifierId, reportId) {
    var report = reports.fetch(reportId);
    if (report.notTryingToSelfValidate(verifierId)) {
      if (hasNotVerifiedYet(verifierId, report._membersHavingVerified)) {
        report._membersHavingVerified.push(verifierId);
        if (enoughValidationsReached(report._membersHavingVerified)) {
          report.makeValid();
        }
      }
    }
  };

  function hasNotVerifiedYet(verifierId, membersHavingVerified) {
    return membersHavingVerified.indexOf(verifierId) === -1;
  }

  function enoughValidationsReached(membersHavingVerified) {
    return membersHavingVerified.length === members.requiredMajority();
  }

}

module.exports = Verification;