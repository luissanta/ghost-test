describe('Testing basic Angular registration', () => {

  // Given
  it('Login', () => {
    cy.visit('http://20.102.114.58/ghost/')
    cy.xpath("//input[@type='email']").type('da.ramirez55@uniandes.edu.co')
    cy.xpath("//input[@type='password']").type('Cg94F4J&$#i8qjX@a9iP')
    cy.xpath("//span[normalize-space()='Sign in']").click()
  })

  // When
  it('Create post and tag', () => {
    cy.xpath("//a[@class='ember-view']").contains("Posts").click({force: true})
    cy.xpath("//span[normalize-space()='New post']").click()
    cy.xpath("//textarea[@placeholder='Post Title']").type('¿Cómo ser el mejor LT?')
    cy.xpath("//div[@class='koenig-editor__editor __mobiledoc-editor __has-no-content']")
        .type('Es bastante probable que con frecuencia encuentres contenido hablando maravillas de un lenguaje en específico.')
    cy.xpath("//button[@title='Settings']//*[name()='svg']").click()
    cy.xpath("//div[@id='tag-input']").type('nuevo tag{enter}')
    cy.xpath("//button[@aria-label='Close']").click()
    cy.wait(300)
    cy.xpath("//a[@class='blue link fw4 flex items-center ember-view']")
        .contains("Posts")
        .click()

  // Then
    cy.xpath("(//a[normalize-space()='Tags'])[1]").click()
    cy.contains('nuevo tag')
  })
})
