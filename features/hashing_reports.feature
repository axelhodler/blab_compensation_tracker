Feature: Hashing a report
  In order to save space on the blockchain
  As a member
  I want the report to be hashed

  Scenario: Creating a hash from a report
    Given an input of 2 hours which achieved output of "wrote blogpost" on date "1473190429855"
    When generating the hash of the report
    Then the hash is "3d6a224a24b7242bf306569fa33d9c078180704ca58c60ef9f9d211aa2dd27e6"
