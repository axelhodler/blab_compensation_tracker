var RequestWrapper = require('./request_wrapper');

function RequestWithAuthorizationHeader() {
  this.get = function(header) {
    if (header === 'Authorization') {
      return 'Bearer someToken';
    }
  }
}

module.exports = {
  knowsIfAuthorizationHeaderPresent: function() {
    var req = new RequestWithAuthorizationHeader();

    var wrapper = new RequestWrapper(req);

    expect(wrapper.hasAuthorizationHeader()).to.be.true;
  },

  knowsIfAuthorizationHeaderNotPresent: function() {
    var req = {
      get: function() {
        return undefined;
      }
    };

    var wrapper = new RequestWrapper(req);

    expect(wrapper.hasAuthorizationHeader()).to.be.false;
  },

  can_extract_token: function() {
    var req = new RequestWithAuthorizationHeader();

    var wrapper = new RequestWrapper(req);

    expect(wrapper.authorizationToken()).to.equal('someToken');
  }
};