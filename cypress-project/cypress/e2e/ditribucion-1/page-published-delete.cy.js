import { LabsPage } from '../../page-object-dist-1/labs-page.js';
import { LoginPage } from '../../page-object-dist-1/login-page.js';
import { PagesPage } from '../../page-object-dist-1/pages-page.js';


describe('Borrar Pagina publicada', async ()=>{
    let logInPage = new LoginPage();
    let pagesPage = new PagesPage();

    beforeEach(() =>{
      logInPage.doLogIn();
      pagesPage.createNewPage(true, "escenario borra publicada");
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