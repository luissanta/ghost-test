import { LoginPage } from '../page-object/login-page.js';
import { PagesPage } from '../page-object/pages-page.js';


describe('Crear Pagina', async ()=>{

    it('Escenario borrar una pagina', async () =>{
      let logInPage = new LoginPage();
      let pagesPage = new PagesPage();
  
      await logInPage.doLogIn();
      await pagesPage.createNewPage();
      await pagesPage.validExistence();
      cy.wait(2000);
      await pagesPage.deletePage();
    });
  
  });