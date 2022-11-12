import { LoginPage } from '../page-object/login-page.js';
import { TagPage } from '../page-object/tag-page.js';
import { PostPage } from '../page-object/post-page.js';

describe('Escenario Asociar tag a pagina', async ()=>{
    let tagPage = new TagPage();
    let logInPage = new LoginPage();
    let postPage = new PostPage();

    beforeEach(() =>{
      logInPage.doLogIn();
      tagPage.createNewTag();
      cy.wait(2000);
      postPage.createNewPost(false);
      cy.url().then((url)=> cy.wrap(url).as('postUri'));
      cy.wait(2000);
    })


    it('Given I am logged in ', async () =>{
        cy.get('@postUri').then(async (postUri)=>{ 
            await postPage.addTag(tagPage.tagNameText);
            cy.wait(2000);
            await postPage.validExistence(postUri, true, tagPage.tagNameText);
        });
    });
  
  });