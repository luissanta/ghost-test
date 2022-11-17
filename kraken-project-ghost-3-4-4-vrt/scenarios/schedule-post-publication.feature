Feature: ESCP10

  @user1 @web
  Scenario: Login, crear post, publicar programado, verificar estado 'scheduled' en dashboard admin
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
    When I enter the list of posts
    And I press the create post button
    And I fill the post title field "¿Cómo ser el mejor Tech Lead?"
    And I fill the post body field "Es bastante probable que con frecuencia encuentres contenido hablando maravillas de un lenguaje."
    And I press the publish button
    And I press the button to schedule post publication
    And I press the button to confirm the scheduled publication of the post
    And I wait for 1 seconds
    And I press the button to return to the post list
    Then I find the dialog whit scheduled publication