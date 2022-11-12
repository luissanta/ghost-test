import { LoginPage } from '../page-object/login-page.js';
import { PostPage } from '../page-object/post-page.js';

describe('Borrar Post', async () => {
  
  await it('Escenario para la eliminación de un post que no se ha publicado', async () => {
    let logInPage = new LoginPage();
    let postPage = new PostPage();

    //Given
    await logInPage.doLogIn();
    //And
    await postPage.createNewPost();
    //When
    await postPage.validExistence();
    cy.wait(2000);
    //Then
    await postPage.deletePost();

  });

});