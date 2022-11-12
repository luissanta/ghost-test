import { LoginPage } from '../page-object/login-page.js';
import { TagPage } from '../page-object/tag-page.js';
import { PagesPage } from '../page-object/pages-page.js';

describe('Escenario Asociar tag a pagina', async ()=>{

    it('Given I am logged in ', async () =>{
        let loginPage = new LoginPage();
        let tagPage = new TagPage();
        let pagesPage = new PagesPage();

        await loginPage.doLogIn();
        await tagPage.createNewTag();
        cy.wait(2000)
        await pagesPage.createNewPage();
        await pagesPage.addTag(tagPage.tagNameText);
        await pagesPage.validExistence(true, tagPage.tagNameText);
    });
  
  });