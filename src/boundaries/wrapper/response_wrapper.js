function ResponseWrapper(res) {
  this.sendUnauthorized = function() {
    res.sendStatus(401);
  };

  this.send = function(content) {
    res.send(content);
  };
}

module.exports = ResponseWrapper;