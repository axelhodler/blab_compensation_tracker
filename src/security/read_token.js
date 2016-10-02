var tokenProvider = require('./token_provider');

module.exports = {
  identificationFrom: function(tokenValue) {
    return tokenProvider.verifiedContent(tokenValue).identification;
  }
};
