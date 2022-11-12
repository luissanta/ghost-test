import { LoginPage } from '../page-object/login-page.js';
import { TagPage } from '../page-object/tag-page.js';

describe('Crear Tag', async ()=>{

    it('Escenario para la creación de tags ', async () =>{
      let tagPage = new TagPage();
      let logInPage = new LoginPage();
      await logInPage.doLogIn();
      await tagPage.createNewTag();
      cy.wait(2000);
      await tagPage.validExistence();
    });
  
  });