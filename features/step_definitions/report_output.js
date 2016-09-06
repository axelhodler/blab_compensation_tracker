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
  }

  var r;

  this.Given(/^an input of (\d+) hours which achieved output of "([^"]*)" on date "([^"]*)"$/, function(hoursSpent, outputDescription, date) {
    r = new Report(hoursSpent, outputDescription, date);
  });

  this.When(/^its reported by member "([^"]*)"$/, function(memberId) {
    var userReports = new UserReports();
    userReports.add(r);
  });

};

