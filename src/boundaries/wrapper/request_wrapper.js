function RequestWrapper(req) {
  this.body = function() {
    return req.body;
  };

  this.hasAuthorizationHeader = function() {
    return !!req.get('Authorization');
  }
}

module.exports = RequestWrapper;