var jwt = require('express-jwt');
var bodyParser = require('body-parser');

var RequestWrapper = require('./wrapper/request_wrapper');
var ResponseWrapper = require('./wrapper/response_wrapper');
var authenticateUser = require('../security/authenticate_user');
var tokenSecret = require('../security/tokensecret');
var readToken = require('../security/read_token');

var AUTHORIZATION_PATH = '/auth';

module.exports = {
  setup: function(app) {

    app.use(bodyParser.json({
      type: 'application/vnd.api+json'
    }));

    app.use(jwt(
      {
        secret: tokenSecret.get(),
        getToken: readToken.fromAuthorizationHeader
      }
    ).unless({path: [AUTHORIZATION_PATH]}));

    app.use(function(err, req, res, next) {
      if (err.name === 'UnauthorizedError') {
        res.status(401).send('invalid token...');
      }
    });

    app.post(AUTHORIZATION_PATH, function(req, res) {
      authenticateUser.authenticate(new RequestWrapper(req), new ResponseWrapper(res));
    });

    return app;
  }
};