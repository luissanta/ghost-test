import { LoginPage } from '../page-object/login-page.js';
import { PostPage } from '../page-object/post-page.js';

describe('Escenario para la eliminación de un post que no se ha publicado', () => {
  it('Given I am logged into admin ghost page', async () => {
    let logInPage = new LoginPage();
    let postPage = new PostPage();
    await logInPage.doLogIn();
    await postPage.createNewPost();
    await postPage.validExistence();
    cy.wait(2000);
    await postPage.deletePost();
  });
  
})