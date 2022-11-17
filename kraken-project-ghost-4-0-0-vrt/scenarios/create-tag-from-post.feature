Feature: ESCP06

  @user1 @web
  Scenario: Login, crear post y tag desde el post, publicar, validar creación de tag en el dashboard de admin
    Given Custom I navigate to page "/ghost"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 1 seconds
    And I press the labs button
    And I press the delete all button
    And I press the confirm delete all button
    And I press the button close deletion alert    
    And I wait for 2 seconds
    When I enter the list of posts
    And I press the create post button
    And I fill the post title field "¿Cómo ser el mejor Tech Lead?"
    And I fill the post body field "Es bastante probable que con frecuencia encuentres contenido hablando maravillas de un lenguaje."
    And I press the button to configuration
    And I fill the tag field "nuevo tag in post"
    And I save the tag
    And I close the configuration
    And I wait for 1 seconds
    And I press the button to return to the post list
    And I press the button to return to the tag list
    Then I find the tag "nuevo tag in post"
