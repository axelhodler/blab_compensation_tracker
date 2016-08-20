function Verification(members, reports) {
  this._reports = reports;

  this.verify = function(verifierId, reportId) {
    var report = reports.fetch(reportId);
    if (report.notTryingToSelfValidate(verifierId)) {
      if (report.hasNotVerifiedYet(verifierId)) {
        report._membersHavingVerified.push(verifierId);
        if (enoughValidationsReached(report._membersHavingVerified)) {
          report.makeValid();
        }
      }
    }
  };

  function enoughValidationsReached(membersHavingVerified) {
    return membersHavingVerified.length === members.requiredMajority();
  }

}

module.exports = Verification;