import { LoginPage } from '../page-object/login-page.js';
import { PostPage } from '../page-object/post-page.js';

describe('Crear Post', () => {

  let logInPage = new LoginPage();
  let postPage = new PostPage();
  
  beforeEach(() =>{
      logInPage.doLogIn();
      postPage.createNewPost(false);
      cy.url().then((url)=> cy.wrap(url).as('postUri'));
      
  })
  
  it('Escenario para la creación de un post que no se ha publicado', () => {
    cy.get('@postUri').then(async (postUri)=>{ 
      await postPage.validExistence(postUri,true);
    });
  });
});