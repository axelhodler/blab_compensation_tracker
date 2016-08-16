Feature: Verify Compensation
  In order to compensate fellow members of the project
  As blocklab
  We want to keep track of our members contributions

  Scenario:
    Given a time spent submission of member 1
    Given member 2 has verified the submission
    When member 3 verifies the submission
    Then the submission is verified