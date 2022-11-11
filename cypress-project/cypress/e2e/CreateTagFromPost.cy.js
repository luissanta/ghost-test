import LoginPage from '../pages/Login'

describe('Create tag from post', () => {

  // Given
  it('Login', () => {
    LoginPage.login('da.ramirez55@uniandes.edu.co', 'Cg94F4J&$#i8qjX@a9iP')
  })

  // When
  it('Create post and tag', () => {
    cy.xpath("//a[@class='ember-view']").contains("Posts").click({force: true})
    cy.xpath("//span[normalize-space()='New post']").click()
    cy.xpath("//textarea[@placeholder='Post Title']").type('¿Cómo ser el mejor Software Developer?')
    cy.xpath("//div[@class='koenig-editor__editor __mobiledoc-editor __has-no-content']")
        .type('Es bastante probable que con frecuencia encuentres contenido hablando maravillas de un lenguaje en específico.')
    cy.xpath("//button[@title='Settings']//*[name()='svg']").click()
    cy.xpath("//div[@id='tag-input']").type('nuevo tag in post{enter}')
    cy.xpath("//button[@aria-label='Close']").click()
    cy.wait(300)
    cy.xpath("//a[@class='blue link fw4 flex items-center ember-view']")
        .contains("Posts")
        .click()

  // Then
    cy.xpath("(//a[normalize-space()='Tags'])[1]").click()
    cy.contains('nuevo tag in post')
  })
})
