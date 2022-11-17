Feature: ESCP18

  @user1 @web
  Scenario: Login, crear página y tag desde la página, publicar, validar creación de tag en el dashboard de admin
    Given Custom I navigate to page "/ghost"
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click sign in
    And I wait for 1 seconds
    And I press the labs button
    And I press the delete all button
    And I press the confirm delete all button
    And I press the button close deletion alert
    And I wait for 1 seconds
    When I enter the list of pages
    And I press the create page button
    And I fill the page title field "¿Cómo ser feliz?"
    And I fill the page body field "Aunque no puedes evitar muchas de las dificultades que encontrarás en la vida, puedes controlar cómo reaccionarás."
    And I press the button to configuration
    And I fill the tag field "nuevo tag in page"
    And I save the tag
    And I wait for 1 seconds
    And I close the configuration
    And I press the publish page button
    And I press the button to confirm the publication of a page    
    And I wait for 1 seconds
    And I press the button to return to the page list
    And I wait for 1 seconds
    And I press the button to return to the tag list
    And I wait for 1 seconds
    Then I find the tag "nuevo tag in page"