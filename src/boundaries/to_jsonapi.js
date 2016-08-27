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

function transformMember(member) {
  member.type = "members";
  member.attributes = {};
  return member;
}

function transformMemberIdToMember(memberId) {
  var member = {};

  member.id = memberId;
  member.type = "members";
  member.attributes = {};
  return member;
}

module.exports =  {
  reports: function(reports) {
    return wrapInData(reports.map(function(item) {
      return transformReport(clone(item));
    }));
  },
  report: function(report) {
    return wrapInData(transformReport(clone(report)))
  },
  members: function(members) {
    return wrapInData(members.map(function(member) {
      return transformMemberIdToMember(clone(member));
    }))
  },
  member: function(member) {
    return wrapInData(transformMember(clone(member)));
  }
};