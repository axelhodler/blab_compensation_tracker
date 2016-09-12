module.exports = {
  members: [],
  add : function(member) {
    this.members.push(member);
  },
  requiredMajority: function() {
    return Math.ceil(this.members.length * 0.51);
  }
};
