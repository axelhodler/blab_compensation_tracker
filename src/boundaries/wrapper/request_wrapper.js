function RequestWrapper(req) {
  this.body = function() {
    return req.body;
  }
}

module.exports = RequestWrapper;