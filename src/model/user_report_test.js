var expect = require('chai').expect;
var UserReport = require('./user_report');

module.exports = {
  userReportDoesNotAcceptAnInputLessThanOneHour: function() {
    expect(function() { new UserReport(0, 'foo', +new Date(), 'memberId'); }).to.throw(Error, /more than/);
  }
};