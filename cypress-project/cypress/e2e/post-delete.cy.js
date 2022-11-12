import { LoginPage } from '../page-object/login-page.js';
import { PostPage } from '../page-object/post-page.js';

describe('Borrar Post', () => {
  let logInPage = new LoginPage();
  let postPage = new PostPage();
  
  beforeEach(() =>{
      logInPage.doLogIn();
      postPage.createNewPost(false);
      cy.url().then((url)=> cy.wrap(url).as('postUri'));
  })
      
  it('Escenario para la eliminación de un post publicado', () => {
      cy.get('@postUri').then(async (postUri)=>{ 
          await postPage.validExistence(postUri,true);
          cy.wait(2000);
          await postPage.deletePost(postUri);
          cy.wait(2000);
          await postPage.validExistence(postUri,false);
      });
  });

});