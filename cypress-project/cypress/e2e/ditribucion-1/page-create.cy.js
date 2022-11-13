import { LabsPage } from '../../page-object-dist-1/labs-page.js';
import { LoginPage } from '../../page-object-dist-1/login-page.js';
import { PagesPage } from '../../page-object-dist-1/pages-page.js';


describe('Crear Pagina', ()=>{
  let logInPage = new LoginPage();
  let pagesPage = new PagesPage();
  
  beforeEach(() =>{
    logInPage.doLogIn();
    pagesPage.createNewPage(false, "escenario crea pagina");
    cy.url().then((url)=> cy.wrap(url).as('pageUri'));
  })


  it('Escenario crear una pagina', async() =>{
    await cy.get('@pageUri').then(async (pageUri)=>{ 
      await pagesPage.validExistence(pageUri,true);
    });
  });

  });