var expect = require('chai').expect;
var members = require('./fake_members');

module.exports = {
  canFindMemberByMail: function() {
    expect(members.memberByMail('mail0@test.com').passwordMatches('pw0')).to.be.true;
  }
};
