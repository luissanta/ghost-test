import { LoginPage } from '../page-object/login-page.js';
import { PagesPage } from '../page-object/pages-page.js';


describe('Borrar Pagina publicada', async ()=>{
    let logInPage = new LoginPage();
    let pagesPage = new PagesPage();

    beforeEach(() =>{
      logInPage.doLogIn();
      pagesPage.createNewPage(true);
      cy.url().then((url)=> cy.wrap(url).as('pageUri'));
      pagesPage.checkUserView();
    })

    it('Escenario borrar una pagina', async () =>{
      cy.get('@pageUri').then(async (pageUri)=>{ 
        await pagesPage.validExistence(pageUri,true);
        cy.wait(2000);
        await pagesPage.deletePage(pageUri);
      });
    });
  
  });