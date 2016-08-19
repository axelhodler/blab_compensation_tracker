function TimeSpent(members, memberId) {
  this._verificationCount = 0;
  this._memberId = memberId;

  this.verify = function(memberId) {
    if (this._memberId !== memberId) {
      this._verificationCount++;
    }
  };

  this.isValid = function() {
    return this._verificationCount === members.requiredMajority() ? true : false;
  };
}

module.exports = TimeSpent;