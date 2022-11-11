import LoginPage from '../pages/LoginPage'
import CreatePagePage from '../pages/CreatePagePage'
import LandingPage from '../pages/LandingPage'

describe('Publish a page', () => {

  // Given
  it('Login', () => {
    LoginPage.login('da.ramirez55@uniandes.edu.co', 'Cg94F4J&$#i8qjX@a9iP')
  })

  // When
  it('Create and publish page', () => {
    CreatePagePage.createPage(
        '¿Cómo ser feliz?',
        'Aunque no puedes evitar muchas de las dificultades que encontrarás en la vida, puedes controlar cómo reaccionarás.'
    )
    CreatePagePage.publishPage()
  })

  // Then
  it('Validate that the page is published', () => {
    LandingPage.ValidatePage(
        '¿Cómo ser feliz?',
        'Aunque no puedes evitar muchas de las dificultades que encontrarás en la vida, puedes controlar cómo reaccionarás.',
        'como-ser-feliz'
    )
  })
})
