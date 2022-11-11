Feature: Publish a post

  @user1 @web
  Scenario: Publish a post
    Given I navigate to page "http://20.102.114.58/ghost"
    And I enter email "da.ramirez55@uniandes.edu.co"
    And I enter password "Cg94F4J&$#i8qjX@a9iP"
    And I click sign in
    And I wait for 1 seconds
    When I enter the list of posts
    And I press the create post button
    And I fill the post title field "¿Cómo ser el mejor Full Stack Developer?"
    And I fill the post body field "Es bastante probable que con frecuencia encuentres contenido hablando maravillas de un lenguaje en específico."
    And I press the publish button
    And I press the button to confirm the publication of a post
    And I wait for 1 seconds
    And I press the button to return to the post list
    And I press the button to close the confirmation modal of the publication of a post
    Then I navigate to page "http://20.102.114.58"
#    And I find the title of the published post "¿Cómo ser el mejor Full Stack Developer?"
#    And I find the body of the published post
    And I wait for 10 seconds
