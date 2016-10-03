function Report(id, submitterId, userChosenReportContents) {
  this.id = id;
  this.input = userChosenReportContents.input;
  this.output = userChosenReportContents.output;
  this.date = userChosenReportContents.date;
  this.submitterId = submitterId;
  this.valid = false;
  this.published = false;
  this.verifiers = [];

  this.verifyBy = function(verifierId) {
    if (notTryingToSelfValidate.call(this, verifierId)) {
      if (hasNotVerifiedYet.call(this, verifierId)) {
        this.verifiers.push(verifierId);
      }
    }
  };

  this.hasReceivedEnoughVerifications = function(requiredMajority) {
    return this.verifiers.length === requiredMajority;
  };

  this.submitter = function() {
    return this.submitterId;
  };

  this.makeValid = function() {
    this.valid = true;
  };

  this.isValid = function() {
    return this.valid;
  };

  this.publish = function() {
    this.published = true;
  };

  function notTryingToSelfValidate(verifierId) {
    return this.submitterId !== verifierId;
  }

  function hasNotVerifiedYet(verifierId) {
    return this.verifiers.indexOf(verifierId) === -1;
  }
}

module.exports = Report;