Feature:
  In order to have an overview which reports were published
  As a blocklab member
  I want to access a list of published reports

  Scenario: List published reports
    Given a verified report "01234d" by member 2
    Given an unpublished report "01337f" by member 2
    When fetching a list of all published reports
    Then the list consists of the report "01234d" by member 2
