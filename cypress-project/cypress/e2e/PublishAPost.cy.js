import LoginPage from '../pages/LoginPage'
import CreatePostPage from '../pages/CreatePostPage'
import LandingPage from '../pages/LandingPage'

describe('Publish a post', () => {

  // Given
  it('Login', () => {
    LoginPage.login('da.ramirez55@uniandes.edu.co', 'Cg94F4J&$#i8qjX@a9iP')
  })

  // When
  it('Create and publish post', () => {
    CreatePostPage.createPost(
        '¿Cómo ser el mejor Full Stack Developer?',
        'Es bastante probable que con frecuencia encuentres contenido hablando maravillas de un lenguaje en específico.'
    )
    CreatePostPage.publishPost()
  })

  // Then
  it('Validate that the post is published', () => {
    LandingPage.ValidatePost(
        '¿Cómo ser el mejor Full Stack Developer?',
        'Es bastante probable que con frecuencia encuentres contenido hablando maravillas de un lenguaje en específico.'
    )
  })
})
