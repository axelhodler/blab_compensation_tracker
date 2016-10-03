var readToken = require('./read_token');

var authorizationToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhdGlvbiI6Im1haWwwQHRlc3QuY29tIiwiaWQiOjAsImlhdCI6MTQ3NTM5NDIzMX0.FwaMWplYdit7jxLMdIzYC6jKHP5-Iw9Iun8CLX2miCs';

module.exports = {
  can_extract_identification_from_token: function() {
    var identification = readToken.identificationFrom(authorizationToken);

    expect(identification).to.equal('mail0@test.com');
  },
  can_get_id_from_request: function() {
    var requestWrapper = {
      authorizationToken: function() {
        return authorizationToken
      }
    };

    var id = readToken.idFromRequest(requestWrapper);

    expect(id).to.equal(0);
  }
};
