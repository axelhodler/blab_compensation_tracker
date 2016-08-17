function Members() {
  this._members = [];

  this.add = function(memberId) {
    this._members.push(memberId)
  }
}

module.exports = Members;
