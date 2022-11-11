describe('Create tag from page', () => {

  // Given
  it('Login', () => {
    cy.visit('http://20.102.114.58/ghost/')
    cy.xpath("//input[@type='email']").type('da.ramirez55@uniandes.edu.co')
    cy.xpath("//input[@type='password']").type('Cg94F4J&$#i8qjX@a9iP')
    cy.xpath("//span[normalize-space()='Sign in']").click()
  })

  // When
  it('Create page and tag', () => {
    cy.xpath("(//a[normalize-space()='Pages'])[1]").click()
    cy.xpath("//span[normalize-space()='New page']").click()
    cy.xpath("//textarea[@placeholder='Page Title']").type('¿Cómo ser feliz?')
    cy.xpath("//div[@class='koenig-editor__editor __mobiledoc-editor __has-no-content']")
        .type('Aunque no puedes evitar muchas de las dificultades que encontrarás en la vida, puedes controlar cómo reaccionarás.')
    cy.xpath("//button[@title='Settings']//*[name()='svg']").click()
    cy.xpath("//div[@id='tag-input']").type('nuevo tag in page{enter}')
    cy.xpath("//button[@aria-label='Close']").click()
    cy.wait(300)
    cy.xpath("//a[@class='blue link fw4 flex items-center ember-view']")
        .contains("Pages")
        .click()

  // Then
    cy.xpath("(//a[normalize-space()='Tags'])[1]").click()
    cy.contains('nuevo tag in page')
  })
})
