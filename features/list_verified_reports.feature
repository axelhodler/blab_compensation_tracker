Feature: List verified reports
  In order to have an overview which reports are valid
  As a blocklab member
  I want to access a list of valid reports

  Scenario: List verified reports
    Given an unverified report "07123e" by member 1
    Given a verified report "01234d" by member 2
    When fetching a list of verified reports
    Then the list consists of the report "01234d" by member 2
