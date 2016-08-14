Feature: Log time spent
  In order to get compensated for completed tasks
  As a blocklab member
  I want to submit a report for verification

  Scenario:
    Given a member 1
    When member 1 submits his time spent
    Then his submission is not yet verified