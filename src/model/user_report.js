var Hash = require('../../src/actions/hash');

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

module.exports = UserReport;