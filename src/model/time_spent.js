function TimeSpent(memberId) {
  this._memberId = memberId;
  this._verified = false;

  this.verify = function(memberId) {
    if (this._memberId !== memberId) {
      this._verified = true;
    }
  };

  this.isVerified = function() {
    return this._verified;
  };
}

module.exports = TimeSpent;