function Report(id, submitterId, input, output, date) {
  if (date > new Date()) {
    throw Error('chosen time cannot lie in the future');
  }
  this.id = id;
  this.input = input;
  this.output = output;
  this.date = date;
  this.submitterId = submitterId;
  this.valid = false;
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

  function notTryingToSelfValidate(verifierId) {
    return this.submitterId !== verifierId;
  }

  function hasNotVerifiedYet(verifierId) {
    return this.verifiers.indexOf(verifierId) === -1;
  }
}

module.exports = Report;