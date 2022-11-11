describe('Publish a page', () => {

  // Given
  it('Login', () => {
    cy.visit('http://20.102.114.58/ghost/')
    cy.xpath("//input[@type='email']").type('da.ramirez55@uniandes.edu.co')
    cy.xpath("//input[@type='password']").type('Cg94F4J&$#i8qjX@a9iP')
    cy.xpath("//span[normalize-space()='Sign in']").click()
  })

  // When
  it('Create and publish page', () => {
    cy.xpath("(//a[normalize-space()='Pages'])[1]").click()
    cy.xpath("//span[normalize-space()='New page']").click()
    cy.xpath("//textarea[@placeholder='Page Title']").type('¿Cómo ser feliz?')
    cy.xpath("//div[@class='koenig-editor__editor __mobiledoc-editor __has-no-content']")
        .type('Aunque no puedes evitar muchas de las dificultades que encontrarás en la vida, puedes controlar cómo reaccionarás.')
    cy.xpath("//span[normalize-space()='Publish']").click()
    cy.xpath("//button[@class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']//span[contains(text(),'Publish')]")
        .click()
    cy.wait(300)
    cy.xpath("//a[@class='blue link fw4 flex items-center ember-view']")
        .contains("Pages")
        .click()
    cy.xpath("//button[@class='gh-notification-close']//*[name()='svg']//*[name()='path' and contains(@d,'M12.707 12')]")
        .click()
  })

  // Then
  it('Validate that the page is published', () => {
    cy.visit('http://20.102.114.58/como-ser-feliz')
    cy.contains('¿Cómo ser feliz?')
    cy.contains('Aunque no puedes evitar muchas de las dificultades que encontrarás en la vida, puedes controlar cómo reaccionarás.')
  })
})
