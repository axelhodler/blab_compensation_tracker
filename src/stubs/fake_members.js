var faker = require('faker');
var Member = require('../model/member');

module.exports = {
  members: [
    new Member(0, 'mail0@test.com', 'pw0', '0x2cf8956c0e038c9750e397f10ceb628463398403', faker.name.findName()),
    new Member(1, 'mail1@test.com', 'pw1', '0xbdb6f96ef21c21338359feae331bae46db5dab5d', faker.name.findName()),
    new Member(2, 'mail2@test.com', 'pw2', '0x693de366da990dbe1ae32645c26d9c3a300c0c60', faker.name.findName()),
    new Member(3, 'mail3@test.com', 'pw3', '0x686596d3151d4f693ec4f1a6aa79ef63b6434149', faker.name.findName()),
    new Member(4, 'mail4@test.com', 'pw4', '0xe8497c7303fca1bac6b728d2e0475a1d231363cc', faker.name.findName()),
    new Member(5, 'mail5@test.com', 'pw5', '0xefba1d213b1d20fbc09974565120553c2f17d5fe', faker.name.findName()),
    new Member(6, 'mail6@test.com', 'pw6', '0xad4dc7629e4d9e864a73c395421fcab4eae46857', faker.name.findName()),
    new Member(7, 'mail7@test.com', 'pw7', '0x032fe96ce220d7f9a20dba6a328c1f04fa070cbc', faker.name.findName()),
    new Member(8, 'mail8@test.com', 'pw8', '0x6d9c6375efd54b03e664fc27d0992a7d1d685c82', faker.name.findName()),
    new Member(9, 'mail9@test.com', 'pw9', '0xb51864ab6fc08b3e36de22ce5088d8ecc59d9aad', faker.name.findName())
  ],
  memberByMail: function(mail) {
    return this.members.filter(function(member) {
      return member.mail === mail;
    })[0];
  }
};