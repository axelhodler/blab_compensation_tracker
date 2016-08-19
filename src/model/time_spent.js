function TimeSpent(members, memberId) {
  this._verificationCount = 0;
  this._memberId = memberId;
  this._isValid = false;
  this._verfiers = [];

  this.verify = function(memberId) {
    if (not_trying_to_self_validate.call(this, memberId)) {
      if (this._verfiers.indexOf(memberId) === -1) {
        this._verfiers.push(memberId);
        this._verificationCount++;
        if (enough_validations_reached.call(this)) {
          this._isValid = true;
        }
      }
    }
  };

  this.isValid = function() {
    return this._isValid;
  };

  function not_trying_to_self_validate(memberId) {
    return this._memberId !== memberId;
  }

  function enough_validations_reached() {
    return this._verificationCount === members.requiredMajority();
  }

}

module.exports = TimeSpent;