function RequestWrapper(req) {
  this.body = function() {
    return req.body;
  };

  this.hasAuthorizationHeader = function() {
    return !!req.get('Authorization');
  };

  this.authorizationToken = function() {
    return req.get('Authorization').substring(7);
  }
}

module.exports = RequestWrapper;