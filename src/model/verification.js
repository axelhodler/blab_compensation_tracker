function Verification(members, reports) {

  this.verify = function(verifierId, reportId) {
    var report = reports.fetch(reportId);
    report.verifyBy(verifierId);
    if (report.hasReceivedEnoughVerifications(members.requiredMajority())) {
      report.makeValid();
    }
  };

}

module.exports = Verification;