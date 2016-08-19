module.exports = function() {
  function Reports() {
    this._reports = [];
    this.add = function(report) {
      this._reports.push(report)
    };

    this.list = function() {
      return this._reports;
    };
  }

  function Report(reportId, memberId) {
    this._reportId = reportId;
    this._memberId = memberId;

    this.id = function() {
      return this._reportId;
    };

    this.submitter = function() {
      return this._memberId;
    }
  }

  var reports;
  var listOfReports;

  this.Given(/^an unverified report "([^"]*)" by member (\d+)$/, function(reportId, memberId) {
    reports = new Reports();
    reports.add(new Report(reportId, memberId));
  });

  this.When(/^fetching a list of unverified reports$/, function() {
    listOfReports = reports.list();
  });

  this.Then(/^the list consists of the report "([^"]*)" by member (\d+)$/, function(reportId, memberId) {
    expect(listOfReports.length).to.equal(1);
    expect(listOfReports[0].id()).to.equal(reportId);
    expect(listOfReports[0].submitter()).to.equal(memberId);
  });
};
