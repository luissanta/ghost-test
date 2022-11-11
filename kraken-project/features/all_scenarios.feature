Feature: Editar una pagina

@user1 @web

Scenario: Hacer Login, crear página, publicar página, editar página, logout, validar edición de página por usuario externo
Given I navigate to page "http://20.102.114.58/ghost"
When I wait for 2 seconds
And I enter email "da.ramirez55@uniandes.edu.co"
And I wait for 2 seconds
And I enter password "Cg94F4J&$#i8qjX@a9iP"
And I wait for 2 seconds
And I click next
And I wait for 2 seconds
Given I navigate to page "http://20.102.114.58/ghost/#/pages"
When I click Create page
And I enter name page "mypage"
And I enter description page "mypage"
And I wait for 2 seconds
And I click selectPublish
And I click publish
And I wait for 5 seconds
And I click on close publish window
And I wait for 5 seconds
And I enter description page "editmypage"
And I wait for 5 seconds
And I click selectPublish
And I click publish
And I wait for 5 seconds
And I click on close publish window
And I wait for 5 seconds
Given I navigate to page "http://20.102.114.58/mypage"
When I wait for 5 seconds
Then I should see "mypageeditmypage"

@user2 @web

Scenario: Hacer Login, crear tag, crear página1, añadir tag a página1 , validar tags en páginas desde el dashboard de admin
Given I navigate to page "http://20.102.114.58/ghost"
When I wait for 2 seconds
And I enter email "da.ramirez55@uniandes.edu.co"
And I wait for 2 seconds
And I enter password "Cg94F4J&$#i8qjX@a9iP"
And I wait for 2 seconds
And I click next
And I wait for 2 seconds
Given I navigate to page "http://20.102.114.58/ghost/#/tags"
And I wait for 5 seconds
And I click on create tag 
And I enter name tag "New Tag"
And I wait for 2 seconds
And I click on save tag 
And I wait for 2 seconds
Given I navigate to page "http://20.102.114.58/ghost/#/pages"
When I click Create page
And I enter name page "mypage"
And I enter description page "mypage"
And I wait for 2 seconds
And I click selectPublish
And I click publish
And I wait for 5 seconds
And I click on close publish window
And I wait for 5 seconds
And I enter description page "editmypage"
And I wait for 5 seconds
And I click on setting
And I wait for 3 seconds
And I click on list tags
And I wait for 3 seconds
And I click on exist tag "New Tag"
And I wait for 3 seconds
And I click on close setting
And I wait for 3 seconds
And I click selectPublish
And I click publish
And I wait for 5 seconds
And I click on close publish window
And I wait for 5 seconds
Given I navigate to page "http://20.102.114.58/ghost/#/tags"
Then I should validate tag in page "New Tag"


@user3 @web

Scenario: Hacer Login, crear post, publicar post, editar post, publish, logout, validar edición de post por usuario externo
Given I navigate to page "http://20.102.114.58/ghost"
When I wait for 2 seconds
And I enter email "da.ramirez55@uniandes.edu.co"
And I wait for 2 seconds
And I enter password "Cg94F4J&$#i8qjX@a9iP"
And I wait for 2 seconds
And I click next
And I wait for 2 seconds
Given I navigate to page "http://20.102.114.58/ghost/#/post"
When I click Create post
And I enter name post "Name Post"
And I enter description post "mypost"
And I wait for 2 seconds
And I click selectPublish
And I click publish
And I wait for 5 seconds
And I click on close publish window
And I wait for 5 seconds
And I enter description post "editmypost"
And I wait for 5 seconds
And I click selectPublish
And I click publish
And I wait for 5 seconds
And I click on close publish window
And I wait for 5 seconds
Given I navigate to page "http://20.102.114.58/"
When I wait for 5 seconds
Then I should validate post the home "mypageeditmypage"

@user4 @web

Scenario: Hacer Login, crear post 1, crear tag, asociar tag a post, verificar en dashboard admin la cantidad de posts con el tag creado

Given I navigate to page "http://20.102.114.58/ghost"
When I wait for 2 seconds
And I enter email "da.ramirez55@uniandes.edu.co"
And I wait for 2 seconds
And I enter password "Cg94F4J&$#i8qjX@a9iP"
And I wait for 2 seconds
And I click next
And I wait for 2 seconds
Given I navigate to page "http://20.102.114.58/ghost/#/tags"
And I wait for 5 seconds
And I click on create tag 
And I enter name tag "New Tag"
And I wait for 2 seconds
And I click on save tag 
And I wait for 2 seconds
Given I navigate to page "http://20.102.114.58/ghost/#/post"
When I click Create post
And I enter name post "Name Post"
And I enter description post "mypost"
And I wait for 2 seconds
And I click selectPublish
And I click publish
And I wait for 5 seconds
And I click on close publish window
And I wait for 5 seconds
And I enter description post "editmypost"
And I wait for 5 seconds
And I click on setting
And I wait for 3 seconds
And I click on list tags
And I wait for 3 seconds
And I click on exist tag "New Tag"
And I wait for 3 seconds
And I click on close setting
And I wait for 3 seconds
And I click selectPublish
And I click publish
And I wait for 2 seconds
And I click on close publish window
And I wait for 2 seconds
Given I navigate to page "http://20.102.114.58/ghost/#/posts"
When I wait for 2 seconds
And I click on tags filter
And I wait for 2 seconds
And I click on exist tag "New Tag"
And I wait for 2 seconds
Then I should validate post is linked to tag1

@user5 @web

Scenario: Hacer Login, crear tag, crear página1, crear página2, añadir tag a página1 y página2, validar tags en páginas desde el dashboard de admin

Given I navigate to page "http://20.102.114.58/ghost"
When I wait for 2 seconds
And I enter email "da.ramirez55@uniandes.edu.co"
And I wait for 2 seconds
And I enter password "Cg94F4J&$#i8qjX@a9iP"
And I wait for 2 seconds
And I click next
And I wait for 2 seconds
Given I navigate to page "http://20.102.114.58/ghost/#/tags"
And I wait for 5 seconds
And I click on create tag 
And I enter name tag "New Tag"
And I wait for 2 seconds
And I click on save tag 
And I wait for 2 seconds
Given I navigate to page "http://20.102.114.58/ghost/#/post"
When I click Create post
And I enter name post "Name Post"
And I enter description post "mypost"
And I wait for 2 seconds
And I click selectPublish
And I click publish
And I wait for 5 seconds
And I click on close publish window
And I wait for 5 seconds
And I enter description post "editmypost"
And I wait for 5 seconds
And I click on setting
And I wait for 3 seconds
And I click on list tags
And I wait for 3 seconds
And I click on exist tag "New Tag"
And I wait for 3 seconds
And I click on close setting
And I wait for 3 seconds
And I click selectPublish
And I click publish
And I wait for 5 seconds
And I click on close publish window
And I wait for 5 seconds
Given I navigate to page "http://20.102.114.58/"
When I wait for 5 seconds
Then I should validate post is linked to tag "New Tag"