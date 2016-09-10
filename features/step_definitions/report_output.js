var Hash = require('../../src/actions/hash');
var Report = require('../../src/model/report');

module.exports = function() {

  function UserReport(input, output, date, memberId) {
    this._input = input;
    this._output = output;
    this._date = date;
    this._memberId = memberId;

    this.hash = function() {
      var hash = new Hash(this._output + ";" + this._input + ";" + this._date);
      return hash.value();
    }
  }

  this.Given(/^an input of (\d+) hours which achieved output of "([^"]*)" on date "([^"]*)" by member (\d+)$/, function (hoursSpent, outputDescription, date, memberId) {
    var r = new UserReport(hoursSpent, outputDescription, date, memberId);
    reports.add(new Report(r.hash(), r._memberId));
  });

};