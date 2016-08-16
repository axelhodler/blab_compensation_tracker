function Submission(memberId) {
  this._verified = false;

  this.verify = function() {
    this._verified = true;
  };

  this.isVerified = function() {
    return this._verified;
  };
}

module.exports = Submission;