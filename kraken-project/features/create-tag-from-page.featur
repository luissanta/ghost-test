Feature: Create tag from page

  @user1 @web
  Scenario: Create tag from page
    Given I navigate to page "http://20.102.114.58/ghost"
    And I enter email "da.ramirez55@uniandes.edu.co"
    And I enter password "Cg94F4J&$#i8qjX@a9iP"
    And I click sign in
    And I wait for 1 seconds
    When I enter the list of pages
    And I press the create page button
    And I fill the page title field "¿Cómo ser feliz?"
    And I fill the page body field "Aunque no puedes evitar muchas de las dificultades que encontrarás en la vida, puedes controlar cómo reaccionarás."
    And I press the button to configuration
    And I fill the tag field "nuevo tag in page"
    And I save the tag
    And I close the configuration
    And I wait for 1 seconds
    And I press the button to return to the page list
    And I press the button to return to the tag list
    Then I find the tag "nuevo tag in page"
