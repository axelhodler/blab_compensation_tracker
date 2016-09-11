var expect = require('chai').expect;
var UserChosenReportContents = require('./user_chosen_report_contents');

module.exports = {
  userReportDoesNotAcceptAnInputLessThanOneHour: function() {
    expect(function() { new UserChosenReportContents(0, 'foo', +new Date()); }).to.throw(Error, /more than/);
  }
};