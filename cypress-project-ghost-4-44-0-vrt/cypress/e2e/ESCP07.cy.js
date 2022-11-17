import { LabsPage } from '../page-object-dist-1/labs-page.js';
import { LoginPage } from '../page-object-dist-1/login-page.js';
import { TagPage } from '../page-object-dist-1/tag-page.js';

describe('Crear Tag',()=>{
    let tagPage = new TagPage();
    let logInPage = new LoginPage();
    let labsPage = new LabsPage();


    beforeEach(() =>{
      //Given
      logInPage.doLogIn();
      labsPage.clearAdmin();
    })


    it('Escenario para la creación de tags ',() =>{
      //When
      tagPage.createNewTag("escenario crea tag");
      //Then
      cy.wait(2000);
      tagPage.validExistence(true);
    });
  
  });