var afterHooks = function () {
  this.After(function (scenario) {
    members.members = [];
  });
};

module.exports = afterHooks;
