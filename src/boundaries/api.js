var members = require('../model/members');
var Reports = require('../model/reports');
var Report = require('../model/report');
var ReportVerification = require('../actions/report_verification');

var express = require('express');
var app = express();

var reports = new Reports();
var verification = new ReportVerification(members, reports);

app.get('/', function (req, res) {
  res.send('WIRED UP');
});

// All the following routes are not REST conform, all using get for initial testing purposes
app.get('/createreport', function(req, res) {
  reports.add(new Report(req.query.id, req.query.submitterId));
  res.send();
});

app.get('/verify', function(req, res) {
  verification.verify(req.query.verifier, req.query.id);
  res.send();
});

app.get('/unverified', function(req, res) {
  res.send(reports.unverified());
});

app.get('/verified', function(req, res) {
  res.send(reports.verified());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});