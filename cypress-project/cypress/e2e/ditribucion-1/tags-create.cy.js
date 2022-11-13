import { LabsPage } from '../../page-object-dist-1/labs-page.js';
import { LoginPage } from '../../page-object-dist-1/login-page.js';
import { TagPage } from '../../page-object-dist-1/tag-page.js';

describe('Crear Tag',()=>{
    let tagPage = new TagPage();
    let logInPage = new LoginPage();

    beforeEach(() =>{
      logInPage.doLogIn();
      tagPage.createNewTag("escenario crea tag");
      cy.wait(2000);
    })


    it('Escenario para la creación de tags ',async () =>{
      await tagPage.validExistence(true);
    });
  
  });