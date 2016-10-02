var jwt = require('jsonwebtoken');
var tokenSecret = require('./tokensecret');

module.exports = {
  sign: function(payload) {
    return jwt.sign(payload, tokenSecret.get());
  }
};