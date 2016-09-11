var Hash = require('../../src/actions/hash');

function UserReport(userChosenReportContents, memberId) {
  this._input = userChosenReportContents.input;
  this._output = userChosenReportContents.output;
  this._date = userChosenReportContents.date;
  this._memberId = memberId;

  this.hash = function() {
    var hash = new Hash(this._output + ";" + this._input + ";" + this._date);
    return hash.value();
  }
}

module.exports = UserReport;