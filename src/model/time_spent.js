function TimeSpent(members, memberId) {
  this._verificationCount = 0;
  this._memberId = memberId;
  this._isValid = false;

  this.verify = function(memberId) {
    if (this._memberId !== memberId) {
      this._verificationCount++;
      if (this._verificationCount === members.requiredMajority()) {
        this._isValid = true;
      }
    }
  };

  this.isValid = function() {
    return this._isValid;
  };
}

module.exports = TimeSpent;