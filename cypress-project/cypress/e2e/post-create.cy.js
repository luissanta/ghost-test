import { LoginPage } from '../page-object/login-page.js';
import { PostPage } from '../page-object/post-page.js';

describe('Crear Post', async () => {
  
  await it('Escenario para la creación de un post que no se ha publicado', async () => {
    let logInPage = new LoginPage();
    let postPage = new PostPage();

    //Given
    await logInPage.doLogIn();
    //And
    await postPage.createNewPost();
    //When
    await postPage.validExistence();

  });

});