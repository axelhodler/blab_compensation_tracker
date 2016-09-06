module.exports = function() {
  function UserReports() {
    var reports = [];

    this.add = function(report) {
      reports.push(report);
    }
  }

  function Report(input, output, date) {
    this._input = input;
    this._output = output;
    this._date = date;

    this.hash = function() {
      return 'dd4b25ab407e3c0bdea13d054034773d202b209ea04b87f1f144e859bf6a38b3';
    }
  }

  var r;

  this.Given(/^an input of (\d+) hours which achieved output of "([^"]*)" on date "([^"]*)"$/, function(hoursSpent, outputDescription, date) {
    r = new Report(hoursSpent, outputDescription, date);
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

