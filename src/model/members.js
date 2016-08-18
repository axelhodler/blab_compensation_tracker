module.exports = {
  members: [],
  add : function(memberId) {
    this.members.push(memberId);
  },
  requiredMajority: function() {
    return Math.ceil(this.members.length * 0.51);
  }
};
