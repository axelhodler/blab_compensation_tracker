function Member(id, email, password, etherAddress, fullName) {
  this.id = id;
  this.mail = email;
  this.password = password;
  this.etherAddress = etherAddress;
  this.fullName = fullName;

  this.passwordMatches = function(password) {
    return this.password === password;
  };
}

module.exports = Member;