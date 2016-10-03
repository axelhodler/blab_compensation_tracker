function ResponseWrapper(res) {
  this.sendUnauthorized = function() {
    res.sendStatus(401);
  };

  this.send = function(content) {
    res.send(content);
  };

  this.sendUnprocessableEntity = function(body) {
    res.status(422).send(body);
  }
}

module.exports = ResponseWrapper;