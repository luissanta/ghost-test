import { LoginPage } from '../page-object/login-page.js';
import { TagPage } from '../page-object/tag-page.js';

describe('Crear Tag',()=>{
    let tagPage = new TagPage();
    let logInPage = new LoginPage();

    beforeEach(() =>{
      logInPage.doLogIn();
      tagPage.createNewTag();
      cy.wait(2000);
    })

    it('Escenario para la creación de tags ', () =>{
      tagPage.validExistence(true);
    });
  
  });