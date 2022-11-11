import LoginPage from '../pages/LoginPage'
import CreatePostPage from '../pages/CreatePostPage'
import TagsPage from '../pages/TagsPage'

describe('Create tag from post', () => {

  // Given
  it('Login', () => {
    LoginPage.login('da.ramirez55@uniandes.edu.co', 'Cg94F4J&$#i8qjX@a9iP')
  })

  // When
  it('Create post and tag', () => {
    CreatePostPage.createPost(
        '¿Cómo ser el mejor Software Developer?',
        'Es bastante probable que con frecuencia encuentres contenido hablando maravillas de un lenguaje en específico.'
    )
    CreatePostPage.createTagFromPost('nuevo tag in post')
  })

  // Then
  it('Validate that the tag exist', () => {
    TagsPage.validateTag('nuevo tag in post')
  })
})
