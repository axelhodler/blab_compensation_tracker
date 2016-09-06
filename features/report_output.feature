Feature: Report achieved output
  In order to receive compensation
  As a member
  I want to report the output i have achieved

  Scenario: Reporting achieved output
    Given an input of 1 hours which achieved output of "foo" on date "1473188008163"
    When its reported by member "1"
