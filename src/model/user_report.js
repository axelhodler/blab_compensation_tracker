var Hash = require('../../src/actions/hash');

function UserReport(input, output, date, memberId) {
  if (input < 1) {
    throw Error('input has to be more than zero');
  }
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