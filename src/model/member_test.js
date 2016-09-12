var expect = require('chai').expect;
var Member = require('./member');

module.exports = {
  knowsIfPasswordMatches: function() {
    var acc = new Member(1, 'irrelevant', 'secret');

    expect(acc.passwordMatches('secret')).to.equal(true);
  }
};