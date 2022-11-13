import { LabsPage } from '../../page-object-dist-1/labs-page.js';
import { LoginPage } from '../../page-object-dist-1/login-page.js';
import { PostPage } from '../../page-object-dist-1/post-page.js';

describe('Borrar Post', () => {
    let logInPage = new LoginPage();
    let postPage = new PostPage();

    beforeEach(() =>{
        logInPage.doLogIn();
        postPage.createNewPost(true, " escenario borra post publicado");
        cy.url().then((url)=> cy.wrap(url).as('postUri'));
        postPage.checkUserView();
    })

        
    it('Escenario para la eliminación de un post publicado', async () => {
        cy.get('@postUri').then(async (postUri)=>{ 
            await postPage.validExistence(postUri,true);
            cy.wait(2000);
            await postPage.deletePost(postUri);
        });
    });

});