var members = require('../stubs/fake_members');
var signToken = require('./sign_token');

module.exports = {
  authenticate: function(requestWrapper, responseWrapper) {
    var mail = requestWrapper.body().username;
    var member = members.memberByMail(mail);
    if (member && member.passwordMatches(requestWrapper.body().password)) {
      responseWrapper.send({
        token: signToken.sign(
          {
            identification: mail,
            id: member.id
          }
        )
      });
    } else {
      responseWrapper.sendUnauthorized();
    }
  }
};