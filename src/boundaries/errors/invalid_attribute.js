function InvalidAttribute(attributeName, errorMessage) {
  this.value = function() {
    return [{
      'status': 422,
      'title': 'Invalid Attribute',
      'source': {
        'pointer': 'data/attributes/' + attributeName
      },
      'detail': errorMessage
    }]
  }
}

module.exports = InvalidAttribute;