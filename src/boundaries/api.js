var members = require('../stubs/fake_members');
var Reports = require('../model/reports');
var UserReport = require('../model/user_report');
var UserChosenReportContents = require('../model/user_chosen_report_contents');
var Report = require('../model/report');
var ReportVerification = require('../actions/report_verification');
var InvalidAttribute = require('./errors/invalid_attribute');
var RequestWrapper = require('./wrapper/request_wrapper');

var toJSONAPI = require('./to_jsonapi');

var express = require('express');

var readToken = require('../security/read_token');
var authApi = require('./auth_api');

var bodyParser = require('body-parser');
var app = express();

var extractMemberIdFromAccessingUser = function(req) {
  return readToken.idFromRequest(new RequestWrapper(req));
};

var reports = new Reports();
var verification = new ReportVerification(members, reports);

app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));

app = authApi.setup(app);
app.get('/members', function(req, res) {
  res.send(toJSONAPI.members(members.members));
});

app.post('/reports', function(req, res) {
  var id = extractMemberIdFromAccessingUser(req);
  var data = req.body.data;
  try {
    var r = new UserChosenReportContents(data.attributes.input, data.attributes.output, data.attributes['created-on']);
    var userReport = new UserReport(r, id);
    var report = reports.add(new Report(userReport.hash(), id, r));
    res.send(toJSONAPI.report(report));
  } catch(err) {
    req.body.errors = new InvalidAttribute('input', err.message).value();
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
  var memberId = extractMemberIdFromAccessingUser(req);
  var reportId = data.relationships.report.data.id;
  verification.verify(memberId, reportId);
  req.body.data.relationships.member = {
    data: {
      type: 'members',
      id: memberId
    }
  };
  res.send(req.body);
});

app.get('/reports/:report_id', function(req, res) {
  res.send(toJSONAPI.report(reports.fetch(req.params.report_id)));
});

app.get('/reports', function(req, res) {
  res.send(toJSONAPI.reports(reports.all()));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});