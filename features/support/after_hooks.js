var afterHooks = function () {
  function resetMembersList() {
    members.members = [];
  }

  this.After(function (scenario) {
    resetMembersList();
    reports = new Reports();
    userChosenReportContents = new UserChosenReportContents(1, 'foo', new Date());
  });
};

module.exports = afterHooks;
