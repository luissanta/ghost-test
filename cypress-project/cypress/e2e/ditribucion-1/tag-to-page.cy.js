import { LoginPage } from '../../page-object-dist-1/login-page.js';
import { TagPage } from '../../page-object-dist-1/tag-page.js';
import { PagesPage } from '../../page-object-dist-1/pages-page.js';

describe('Escenario Asociar tag a pagina', async ()=>{
    let tagPage = new TagPage();
    let logInPage = new LoginPage();
    let pagesPage = new PagesPage();

    beforeEach(() =>{
      logInPage.doLogIn();
      tagPage.createNewTag("e1");
      cy.wait(2000);
      pagesPage.createNewPage(false, "escenario asigna tag a pagina");
      cy.url().then((url)=> cy.wrap(url).as('pageUri'));
      cy.wait(2000);
    })


    it('Given I am logged in ', async () =>{
        cy.get('@pageUri').then(async (pageUri)=>{ 
            await pagesPage.addTag(tagPage.tagNameText);
            cy.wait(2000);
            await pagesPage.validExistence(pageUri, true, tagPage.tagNameText);
        });
    });
  
  });