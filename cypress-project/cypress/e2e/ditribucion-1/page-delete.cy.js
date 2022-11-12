import { LoginPage } from '../../page-object-dist-1/login-page';
import { PagesPage } from '../../page-object-dist-1/pages-page.js';


describe('Borrar Pagina', async ()=>{
    let logInPage = new LoginPage();
    let pagesPage = new PagesPage();

    beforeEach(() =>{
      logInPage.doLogIn();
      pagesPage.createNewPage(false, "escenario borra");
      cy.url().then((url)=> cy.wrap(url).as('pageUri'));
    })

    it('Escenario borrar una pagina', async () =>{
      cy.get('@pageUri').then(async (pageUri)=>{ 
        await pagesPage.validExistence(pageUri,true);
        cy.wait(2000);
        await pagesPage.deletePage(pageUri);
      });
    });
  
  });