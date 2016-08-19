Feature: Verify Compensation
  In order to compensate fellow members of the project
  As blocklab
  We want to keep track of our members contributions

  Scenario: It takes a majority of members for a timespent to be verified
    Given following members exist:
      | memberId |
      | 1 |
      | 2 |
      | 3 |
    Given timespent of member 2
    When member 3 verifies timespent
    Then timespent is not verified

  Scenario: It takes a majority of members for a timespent to be verified
    Given following members exist:
      | memberId |
      | 1        |
      | 2        |
      | 3        |
      | 4        |
      | 5        |
    Given timespent of member 2
    Given member 3 has verified timespent
    Given member 4 has verified timespent
    When member 5 verifies timespent
    Then timespent is verified

  Scenario: Members cant verify their own timespent
    Given following members exist:
      | memberId |
      | 1        |
    Given timespent of member 1
    When member 1 verifies timespent
    Then timespent is not verified

  Scenario: Members cant verify multiple times
    Given following members exist:
      | memberId |
      | 1 |
      | 2 |
      | 3 |
    Given timespent of member 1
    Given member 2 has verified timespent
    When member 2 verifies timespent
    Then timespent is not verified