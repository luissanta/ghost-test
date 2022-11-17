import { LoginPage } from '../page-object-dist-1/login-page.js';
import { PagesPage } from '../page-object-dist-1/pages-page.js';
import { LabsPage } from '../page-object-dist-1/labs-page.js';

describe('Crear Pagina', ()=>{
  let logInPage = new LoginPage();
  let pagesPage = new PagesPage();
  let labsPage = new LabsPage();
  
  beforeEach(() =>{
    //Given
    logInPage.doLogIn();
    labsPage.clearAdmin();
  })


  it('Escenario crear una pagina', () =>{
    //When
    pagesPage.createNewPage(false, "escenario crea pagina");
    //Then
    cy.url().then((url)=> pagesPage.validExistence(url,true));      
  });

});