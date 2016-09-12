var members = require('../stubs/fake_members');
var Reports = require('../model/reports');
var UserReport = require('../model/user_report');
var UserChosenReportContents = require('../model/user_chosen_report_contents');
var Report = require('../model/report');
var ReportVerification = require('../actions/report_verification');

var toJSONAPI = require('./to_jsonapi');

var express = require('express');
var jwt = require('express-jwt');
var tokenSecret = require('../security/tokensecret');
var tokenProvider = require('../security/token_provider');

var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));

var useTokenInAuthorizationHeader = function fromHeader (req) {
  var authorizationHeader = req.get('Authorization').substring(7);
  return authorizationHeader ? authorizationHeader : null;
};

var AUTHORIZATION_PATH = '/auth';
app.use(jwt(
  {
    secret: tokenSecret.get(),
    getToken: useTokenInAuthorizationHeader
  }
).unless({path: [AUTHORIZATION_PATH]}));

var reports = new Reports();
var verification = new ReportVerification(members, reports);

app.post(AUTHORIZATION_PATH, function(req, res) {
  res.send({token : tokenProvider.sign({identification: req.body.identification})});
});

app.get('/members', function(req, res) {
  res.send(toJSONAPI.members(members.members));
});

app.post('/reports', function(req, res) {
  var data = req.body.data;
  try {
    var r = new UserReport(new UserChosenReportContents(data.attributes.input, data.attributes.output, data.attributes['created-on']), data.attributes['submitter-id']);
    res.send(toJSONAPI.report(reports.add(new Report(r.hash(), r._memberId, r._input, r._output, r._date))));
  } catch(err) {
    req.body.errors = [
      {
        'status': 422,
        'title': 'Invalid Attribute',
        'source': {
          'pointer': 'data/attributes/input'
        },
        'detail': err.message
      }
    ];
    res.status(422)
      .send(req.body);
  }
});

app.get('/verifications/:member_id', function(req, res) {
  var member = {id: req.params.member_id};
  res.send(toJSONAPI.member(member));
});

app.post('/verifications', function(req, res) {
  var data = req.body.data;
  var memberId = data.relationships.member.data.id;
  var reportId = data.relationships.report.data.id;
  verification.verify(memberId, reportId);
  res.send(req.body);
});

app.get('/reports/:report_id', function(req, res) {
  res.send(toJSONAPI.report(reports.fetch(req.params.report_id)));
});

app.get('/reports', function(req, res) {
  res.send(toJSONAPI.reports(reports.all()));
});

app.get('/verified', function(req, res) {
  res.send(reports.verified());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});