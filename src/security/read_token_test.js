var expect = require('chai').expect;
var readToken = require('./read_token');

module.exports = {
  extractIdentification: function() {
    var identification = readToken.identificationFrom('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhdGlvbiI6Im1haWwwQHRlc3QuY29tIiwiaWQiOjAsImlhdCI6MTQ3NTM5NDIzMX0.FwaMWplYdit7jxLMdIzYC6jKHP5-Iw9Iun8CLX2miCs');

    expect(identification).to.equal('mail0@test.com');
  }
};
