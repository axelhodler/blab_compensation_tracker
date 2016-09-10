var createHash = require('sha.js');

function Hash(input) {
  this._input = input;

  this.value = function() {
    var sha256 = createHash('sha256');
    return sha256.update(this._input, 'utf8').digest('hex');
  }
}

module.exports = Hash;
