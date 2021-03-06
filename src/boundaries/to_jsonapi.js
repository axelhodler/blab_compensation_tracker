function clone(original) {
  return JSON.parse(JSON.stringify(original))
}
function wrapInData(content) {
  return { data: content };
}

function transformReport(report) {
  var attrs = {};
  attrs['submitter-id'] = report.submitterId;
  attrs['created-on'] = report.date;
  attrs.input = report.input;
  attrs.output = report.output;
  attrs.valid = report.valid;
  attrs.verifiers = report.verifiers;
  attrs.published = report.published;
  var relationshipData = report.verifiers.map(function(verifier) {
    return { type: "verifications", id: verifier}
  });

  delete report.submitterId;
  delete report.valid;
  delete report.verifiers;
  delete report.date;
  delete report.input;
  delete report.output;
  delete report.published;

  report.type = "reports";
  report.attributes = attrs;
  if (relationshipData) {
    report.relationships = {verifications: { data: relationshipData}};
  }
  return report;
}

function transformMember(member) {
  member.type = "members";
  member.attributes = {};
  return member;
}

function transformMemberIdToMember(aMember) {
  var member = {};

  member.id = aMember.id;
  member.type = "members";
  member.attributes = {
    'full-name' : aMember.fullName,
    'ether-address' : aMember.etherAddress,
    mail: aMember.mail
  };
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