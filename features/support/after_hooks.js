var afterHooks = function () {
  function resetMembersList() {
    members.members = [];
  }

  this.After(function (scenario) {
    resetMembersList();
  });
};

module.exports = afterHooks;
