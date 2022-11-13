import LoginPage from '../pages/LoginPage'
import CreatePostPage from '../pages/CreatePostPage'
import PostsPage from '../pages/PostsPage'

let config = require('../../config.json')

describe('Schedule post publication', () => {

  // Given
  it('Login', () => {
    LoginPage.login(config.logIn.userName, config.logIn.userPass)
  })

  // When
  it('Create and schedule post publication', () => {
    CreatePostPage.createPost(
        '¿Cómo ser el mejor Tech Lead?',
        'Es bastante probable que con frecuencia encuentres contenido hablando maravillas de un lenguaje en específico.'
    )
    CreatePostPage.schedulePostPublication()

  // Then
    PostsPage.validateSchedulePost('¿Cómo ser el mejor Tech Lead?')
  })
})
