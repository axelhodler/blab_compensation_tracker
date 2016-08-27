function clone(original) {
  return JSON.parse(JSON.stringify(original))
}
function wrapInData(content) {
  return { data: content };
}

function transformReport(report) {
  var attrs = {};
  attrs['submitter-id'] = report.submitterId;
  attrs.valid = report.valid;
  attrs.verifiers = report.verifiers;

  delete report.submitterId;
  delete report.valid;
  delete report.verifiers;

  report.type = "reports";
  report.attributes = attrs;
  return report;
}

module.exports =  {
  reports: function(reports) {
    return wrapInData(reports.map(function(item) {
      return transformReport(clone(item));
    }));
  },
  report: function(report) {
    return wrapInData(transformReport(clone(report)))
  }
};