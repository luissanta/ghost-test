import LoginPage from '../pages/LoginPage'
import CreatePostPage from '../pages/CreatePostPage'
import LandingPage from '../pages/LandingPage'

let config = require('../../config.json')

describe('Publish a post', () => {

  // Given
  it('Login', () => {
    LoginPage.login(config.logIn.userName, config.logIn.userPass)
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
