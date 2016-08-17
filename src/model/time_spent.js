function TimeSpent(memberId) {
  this._verificationCount = 0;
  this._memberId = memberId;

  this.verify = function(memberId) {
    if (this._memberId !== memberId) {
      this._verificationCount++;
    }
  };

  this.isVerified = function() {
    return this._verificationCount === 2 ? true : false;
  };
}

module.exports = TimeSpent;