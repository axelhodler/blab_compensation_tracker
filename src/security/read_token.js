var jwt = require('jsonwebtoken');
var tokenSecret = require('./tokensecret');

function verifiedContent(token) {
  return jwt.verify(token, tokenSecret.get());
}

module.exports = {
  identificationFrom: function(tokenValue) {
    return verifiedContent(tokenValue).identification;
  }
};
