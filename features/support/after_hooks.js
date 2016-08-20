var afterHooks = function () {
  function resetMembersList() {
    members.members = [];
  }

  this.After(function (scenario) {
    resetMembersList();
    reports = new Reports();
  });
};

module.exports = afterHooks;
