var members = require('../model/members');
var Reports = require('../model/reports');
var UserReport = require('../model/user_report');
var Report = require('../model/report');
var ReportVerification = require('../actions/report_verification');

var toJSONAPI = require('./to_jsonapi');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));

var reports = new Reports();
var verification = new ReportVerification(members, reports);

app.get('/', function (req, res) {
  res.send('WIRED UP');
});

app.get('/members', function(req, res) {
  res.send(toJSONAPI.members(members.members));
});

app.post('/members', function(req, res) {
  var data = req.body.data;
  members.add(data.id);
  res.send(toJSONAPI.member(req.body.data));
});

app.post('/reports', function(req, res) {
  var data = req.body.data;
  var r = new UserReport(data.attributes.input, data.attributes.output, data.attributes.date, data.attributes['submitter-id']);
  res.send(toJSONAPI.report(reports.add(new Report(r.hash(), r._memberId))));
});

app.get('/verifications/:member_id', function(req, res) {
  var member = {id: req.params.member_id}
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