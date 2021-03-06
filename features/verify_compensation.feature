Feature: Verify Compensation
  In order to compensate fellow members of the project
  As blocklab
  We want to keep track of our members contributions

  Scenario: It takes a majority of members for a report to be verified
    Given following members exist:
      | memberId |
      | 1 |
      | 2 |
      | 3 |
    Given report of member 2 with id "07123e"
    When member 3 verifies report with id "07123e"
    Then report is not verified

  Scenario: It takes a majority of members for a report to be verified
    Given following members exist:
      | memberId |
      | 1        |
      | 2        |
      | 3        |
      | 4        |
      | 5        |
    Given report of member 2 with id "07123e"
    Given member 3 has verified report with id "07123e"
    Given member 4 has verified report with id "07123e"
    When member 5 verifies report with id "07123e"
    Then report is verified

  Scenario: Members cant verify their own report
    Given following members exist:
      | memberId |
      | 1        |
    Given report of member 1 with id "07123e"
    When member 1 verifies report with id "07123e"
    Then report is not verified

  Scenario: Members cant verify multiple times
    Given following members exist:
      | memberId |
      | 1 |
      | 2 |
      | 3 |
    Given report of member 1 with id "07123e"
    Given member 2 has verified report with id "07123e"
    When member 2 verifies report with id "07123e"
    Then report is not verified