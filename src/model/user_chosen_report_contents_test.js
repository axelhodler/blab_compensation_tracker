var UserChosenReportContents = require('./user_chosen_report_contents');

module.exports = {
  userReportDoesNotAcceptAnInputLessThanOneHour: function() {
    expect(function() { new UserChosenReportContents(0, 'foo', +new Date()); }).to.throw(Error, /more than/);
  },
  addingReportUsingDateInTheFutureThrows : function() {
    var inOneHour = new Date().getTime() + 3600000;
    var date = new Date(inOneHour);

    expect(function() {
      new UserChosenReportContents(1, 'something', inOneHour);
    }).to.throw(Error, 'in the future');
  }
};