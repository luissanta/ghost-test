import LoginPage from '../pages/LoginPage'
import CreatePostPage from '../pages/CreatePostPage'
import TagsPage from '../pages/TagsPage'

let config = require('../../config.json')

describe('Create tag from post', () => {

  it('Create post and tag', () => {
    //Given 
    LoginPage.login(config.logIn.userName, config.logIn.userPass)
    //When
    CreatePostPage.createPost(
        '¿Cómo ser el mejor Software Developer?',
        'Es bastante probable que con frecuencia encuentres contenido hablando maravillas de un lenguaje en específico.'
    )
    CreatePostPage.createTagFromPost('nuevo tag in post')
    //Then
    TagsPage.validateTag('nuevo tag in post')
  })

})
