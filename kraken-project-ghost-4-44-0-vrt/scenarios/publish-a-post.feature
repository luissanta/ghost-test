Feature: ESCP02

  @user1 @web
  Scenario: Login, crear post, publicar post, logout, verificación de post
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
    When Custom I navigate to page "/ghost/#/posts"
    And I press the create post button
    And I fill the post title field "¿Cómo ser el mejor Full Stack Developer?"
    And I fill the post body field "Es bastante probable que con frecuencia encuentres contenido hablando maravillas de un lenguaje en específico."
    And I press the publish button
    And I press the button to confirm the publication of a post
    And I press the button the confirmation modal publish
    And I wait for 1 seconds
    And I press the button to return to the post list  
    And I press the button to close the confirmation modal of the publication of a post
    Then Custom I navigate to page "/"
    And I find the title of the published post "¿Cómo ser el mejor Full Stack Developer?"
