var Hash = require('../../src/actions/hash');
var Report = require('../../src/model/report');
var Reports = require('../../src/model/reports');

module.exports = function() {
  function UserReports() {
    var reports = [];

    this.add = function(report) {
      reports.push(report);
    }
  }

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

  var r;

  this.Given(/^an input of (\d+) hours which achieved output of "([^"]*)" on date "([^"]*)" by member (\d+)$/, function (hoursSpent, outputDescription, date, memberId) {
    r = new UserReport(hoursSpent, outputDescription, date, memberId);
    reports.add(new Report(r.hash(), r._memberId));
  });

  this.Given(/^an input of (\d+) hours which achieved output of "([^"]*)" on date "([^"]*)"$/, function(hoursSpent, outputDescription, date) {
    r = new UserReport(hoursSpent, outputDescription, date);
  });

  this.When(/^generating the hash of the report$/, function () {
  });

  this.Then(/^the hash is "([^"]*)"$/, function(expectedHash) {
    expect(r.hash()).to.equal(expectedHash);
  });

  this.When(/^its reported by member "([^"]*)"$/, function(memberId) {
    var userReports = new UserReports();
    userReports.add(r);
  });

  this.Then(/^the report itself is hashed to "([^"]*)"$/, function(expectedHash) {
    expect(r.hash()).to.equal(expectedHash);
  });

};

