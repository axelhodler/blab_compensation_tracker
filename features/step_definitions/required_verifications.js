module.exports = function() {
  this.Then(/^the majority is (\d+)$/, function (expectedMajority) {
    expect(members.requiredMajority()).to.be.equal(+expectedMajority);
  });
};