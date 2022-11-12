import LoginPage from '../pages/LoginPage'
import CreatePostPage from '../pages/CreatePostPage'
import PostsPage from '../pages/PostsPage'

describe('Schedule post publication', () => {

  // Given
  it('Login', () => {
    LoginPage.login('da.ramirez55@uniandes.edu.co', 'Cg94F4J&$#i8qjX@a9iP')
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
