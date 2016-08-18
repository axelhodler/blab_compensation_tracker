Feature: Calculate required verifications
  In order to know if timespent is valid
  As all blocklab members
  We need a majority to verify the timespent

  Scenario:
    Given following members exist:
      | memberId |
      | 1 |
      | 2 |
      | 3 |
    Then the majority is 2

  Scenario:
    Given following members exist:
      | memberId |
      | 1 |
      | 2 |
      | 3 |
      | 4 |
    Then the majority is 3