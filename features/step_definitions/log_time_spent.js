var Member = require('../../src/model/member');
var TimeSpent = require('../../src/model/time_spent');

module.exports = function() {
  var timeSpent;

  this.Given(/^a member (\d+)$/, function (id) {
    new Member(id);
  });
};
