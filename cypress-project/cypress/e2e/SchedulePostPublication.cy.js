describe('Schedule post publication', () => {

  // Given
  it('Login', () => {
    cy.visit('http://20.102.114.58/ghost/')
    cy.xpath("//input[@type='email']").type('da.ramirez55@uniandes.edu.co')
    cy.xpath("//input[@type='password']").type('Cg94F4J&$#i8qjX@a9iP')
    cy.xpath("//span[normalize-space()='Sign in']").click()
  })

  // When
  it('Create and schedule post publication', () => {
    cy.xpath("//a[@class='ember-view']").contains("Post").click({force: true})
    cy.xpath("//span[normalize-space()='New post']").click()
    cy.xpath("//textarea[@placeholder='Post Title']").type('¿Cómo ser el mejor Tech Lead?')
    cy.xpath("//div[@class='koenig-editor__editor __mobiledoc-editor __has-no-content']")
        .type('Es bastante probable que con frecuencia encuentres contenido hablando maravillas de un lenguaje en específico.')
    cy.xpath("//span[normalize-space()='Publish']").click()
    cy.xpath("//div[@class='gh-publishmenu-radio ']//div[@class='gh-publishmenu-radio-button']").click()
    cy.xpath("//span[normalize-space()='Schedule']").click()
    cy.wait(300)
    cy.xpath("//a[@class='blue link fw4 flex items-center ember-view']")
        .contains("Posts")
        .click()
  })

  // Then
  it('Validate scheduled post publication', () => {
    cy.xpath("//span[@class='gh-notification-title']").contains("Scheduled")
    cy.contains('¿Cómo ser el mejor Tech Lead?')
  })
})
