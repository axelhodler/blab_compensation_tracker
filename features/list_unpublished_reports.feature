Feature:
  In order to review or extend my reports before publishing
  As a blocklab member
  I want to access my unpublished reports

  Scenario: List my published reports
    Given an unpublished report "01337f" by member 1
    Given an unpublished report "01234e" by member 2
    When fetching a list of unpublished reports of member 1
    Then the list consists of the report "01337f" by member 1