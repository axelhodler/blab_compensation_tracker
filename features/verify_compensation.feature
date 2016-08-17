Feature: Verify Compensation
  In order to compensate fellow members of the project
  As blocklab
  We want to keep track of our members contributions

  Scenario: It takes a majority of members for a timespent to be verified
    Given timespent of member 1
    Given member 2 has verified timespent
    When member 3 verifies timespent
    Then timespent is verified

  Scenario: Members cant verify their own timespent
    Given timespent of member 1
    When member 1 verifies timespent
    Then timespent is not verified