import { LabsPage } from '../../page-object-dist-1/labs-page.js';
import { LoginPage } from '../../page-object-dist-1/login-page.js';

describe('Escenario borrar info total', async ()=>{
    let logInPage = new LoginPage();
    let labPage = new LabsPage();    
    beforeEach(() =>{
      logInPage.doLogIn();
    })


    it('clean data ', () =>{
        labPage.clearAdmin();
    });
  
  });