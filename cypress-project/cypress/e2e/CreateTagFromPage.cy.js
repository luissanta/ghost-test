import LoginPage from '../pages/LoginPage'
import CreatePagePage from '../pages/CreatePagePage'
import TagsPage from '../pages/TagsPage'

describe('Create tag from page', () => {

  // Given
  it('Login', () => {
    LoginPage.login('da.ramirez55@uniandes.edu.co', 'Cg94F4J&$#i8qjX@a9iP')
  })

  // When
  it('Create page and tag', () => {
    CreatePagePage.createPage(
        '¿Cómo ser feliz?',
        'Aunque no puedes evitar muchas de las dificultades que encontrarás en la vida, puedes controlar cómo reaccionarás.'
    )
    CreatePagePage.createTagFromPage('nuevo tag in page')

  // Then
    TagsPage.validateTag('nuevo tag in page')
  })
})
