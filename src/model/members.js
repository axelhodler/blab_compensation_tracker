module.exports = {
  members: [],
  add : function(memberId) {
    this.members.push(memberId);
  },
  requiredMajority: function() {
    return 2;
  }
};
