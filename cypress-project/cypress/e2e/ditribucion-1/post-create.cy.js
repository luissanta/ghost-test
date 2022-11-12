import { LoginPage } from '../../page-object-dist-1/login-page.js';
import { PostPage } from '../../page-object-dist-1/post-page.js';

describe('Crear Post', () => {

  let logInPage = new LoginPage();
  let postPage = new PostPage();
  
  beforeEach(() =>{
      logInPage.doLogIn();
      postPage.createNewPost(false, "escenario crea post");
      cy.url().then((url)=> cy.wrap(url).as('postUri'));
      
  })
  
  it('Escenario para la creación de un post que no se ha publicado', () => {
    cy.get('@postUri').then(async (postUri)=>{ 
      await postPage.validExistence(postUri,true);
    });
  });
});