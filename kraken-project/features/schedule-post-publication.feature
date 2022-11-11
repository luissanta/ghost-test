Feature: Schedule post publication

  @user1 @web
  Scenario: Schedule post publication
    Given I navigate to page "http://20.102.114.58/ghost"
    And I enter email "da.ramirez55@uniandes.edu.co"
    And I enter password "Cg94F4J&$#i8qjX@a9iP"
    And I click sign in
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
    Then I wait for 10 seconds