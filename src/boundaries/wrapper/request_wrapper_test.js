var RequestWrapper = require('./request_wrapper');

module.exports = {
  knowsIfAuthorizationHeaderPresent: function() {
    var req = {
      get: function(header) {
        if (header === 'Authorization') {
          return 'Bearer someToken';
        }
      }
    };

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
  }
};