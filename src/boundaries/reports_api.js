

module.exports = {
  createReport: function(requestWrapper, responseWrapper) {
    var id = extractMemberIdFromAccessingUser(req);
    var data = req.body.data;
    try {
      var r = new UserChosenReportContents(data.attributes.input, data.attributes.output, data.attributes['created-on']);
      var userReport = new UserReport(r, id);
      var report = reports.add(new Report(userReport.hash(), id, r));
      res.send(toJSONAPI.report(report));
    } catch (err) {
      req.body.errors = new InvalidAttribute('input', err.message).value();
      res.status(422)
        .send(req.body);
    }
  }
};