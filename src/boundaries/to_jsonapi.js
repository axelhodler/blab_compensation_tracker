function wrapInData(content) {
  return { data: content };
}

module.exports =  {
  reports: function(reports) {
    return wrapInData(reports.map(function(item) {
      var copy = JSON.parse(JSON.stringify(item));

      var attrs = {};
      attrs['submitter-id'] = copy.submitterId;
      attrs.valid = copy.valid;
      attrs.verifiers = copy.verifiers;

      delete copy.submitterId;
      delete copy.valid;
      delete copy.verifiers;

      copy.type = "reports";
      copy.attributes = attrs;
      return copy;
    }));
  }
};