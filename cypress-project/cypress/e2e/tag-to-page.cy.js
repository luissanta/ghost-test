import { LoginPage } from '../page-object-dist-1/login-page.js';
import { TagPage } from '../page-object-dist-1/tag-page.js';
import { PagesPage } from '../page-object-dist-1/pages-page.js';
import { LabsPage } from '../page-object-dist-1/labs-page.js';

describe('Escenario Asociar tag a pagina', async ()=>{
    let tagPage = new TagPage();
    let logInPage = new LoginPage();
    let pagesPage = new PagesPage();
    let labsPage = new LabsPage();

    beforeEach(() =>{
      logInPage.doLogIn();
      labsPage.clearAdmin();
      //Given
      tagPage.createNewTag();
      cy.wait(2000);
      pagesPage.createNewPage(false, "escenario asigna tag a pagina");
      cy.url().then((url)=> cy.wrap(url).as('pageUri'));
      cy.wait(2000);
    })


    it('Given I am logged in ', () =>{
        cy.get('@pageUri').then((pageUri)=>{
            //When 
            pagesPage.addTag(tagPage.tagNameText);
            cy.wait(2000);
            
            //Then
            pagesPage.validExistence(pageUri, true, tagPage.tagNameText);
        });
    });
  
  });