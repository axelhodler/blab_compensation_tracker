Feature: List unverified reports
  In order to quickly verify reports
  As a blocklab member
  I want to access a list of reports which have yet to be verified

  Scenario: List unverified reports
    Given an unverified report "07123e1f482356c415f684407a3b8723e10b2cbbc0b8fcd6282c49d37c9c1abc" by member 1
    When fetching a list of unverified reports
    Then the list consists of the report "07123e1f482356c415f684407a3b8723e10b2cbbc0b8fcd6282c49d37c9c1abc"