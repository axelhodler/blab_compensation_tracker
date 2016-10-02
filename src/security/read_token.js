var jwt = require('jsonwebtoken');
var tokenSecret = require('./tokensecret');

function verifiedContent(token) {
  return jwt.verify(token, tokenSecret.get());
}

module.exports = {
  identificationFrom: function(tokenValue) {
    return verifiedContent(tokenValue).identification;
  },
  fromAuthorizationHeader: function(request) {
    var authorizationHeader = request.get('Authorization');
    if (authorizationHeader) {
      return authorizationHeader.substring(7);
    } else {
      return null;
    }
  },
  idFrom: function(tokenValue) {
    return verifiedContent(tokenValue).id;
  }
};