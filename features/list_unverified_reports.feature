Feature: List unverified reports
  In order to quickly verify reports
  As a blocklab member
  I want to access a list of reports which have yet to be verified

  Scenario: List unverified reports
    Given an unverified report "07123e" by member 1
    When fetching a list of unverified reports
    Then the list consists of the report "07123e" by member 1

  Scenario: Show single unverified report
    Given an unverified report "07123e" by member 1
    When fetch unverified report "07123e"
    Then the result is the report "07123e" by member 1