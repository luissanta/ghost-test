import Logi from "./Pages/Logi";
require('cypress-xpath');

describe('Publish a post', () => {

  // const login = new Logi()
  // Given
  it('Login', () => {
    cy.visit('http://20.102.114.58/ghost/')
    cy.xpath("//input[@type='email']").type('da.ramirez55@uniandes.edu.co')
    cy.xpath("//input[@type='password']").type('Cg94F4J&$#i8qjX@a9iP')
    cy.xpath("//span[normalize-space()='Sign in']").click()
    // login.login('test', 'test')
    // Logi.typeEmail('hola')
    // Logi.typePassword('hola')
    // Logi.clickLogin()
  })

  // When
  it('Create and publish post', () => {
    cy.xpath("//a[@class='ember-view']").contains("Post").click({force: true})
    cy.xpath("//span[normalize-space()='New post']").click()
    cy.xpath("//textarea[@placeholder='Post Title']").type('¿Cómo ser el mejor Full Stack Developer?')
    cy.xpath("//div[@class='koenig-editor__editor __mobiledoc-editor __has-no-content']")
        .type('Es bastante probable que con frecuencia encuentres contenido hablando maravillas de un lenguaje en específico.')
    cy.xpath("//span[normalize-space()='Publish']").click()
    cy.xpath("//button[@class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']//span[contains(text(),'Publish')]")
        .click()
    cy.wait(300)
    cy.xpath("//a[@class='blue link fw4 flex items-center ember-view']")
        .contains("Posts")
        .click()
    cy.xpath("//button[@class='gh-notification-close']//*[name()='svg']//*[name()='path' and contains(@d,'M12.707 12')]")
        .click()
  })

  // Then
  it('Validate that the post is published', () => {
    cy.visit('http://20.102.114.58')
    cy.contains('¿Cómo ser el mejor Full Stack Developer?')
    cy.contains('Es bastante probable que con frecuencia encuentres contenido hablando maravillas de un lenguaje en específico.')
  })
})
