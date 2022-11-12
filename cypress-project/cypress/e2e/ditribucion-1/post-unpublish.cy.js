import { LoginPage } from '../../page-object-dist-1/login-page.js';
import { PostPage } from '../../page-object-dist-1/post-page.js';

describe('Unpublish Post', () => {
    let logInPage = new LoginPage();
    let postPage = new PostPage();
    beforeEach(() =>{
        logInPage.doLogIn();
        postPage.createNewPost(true, " escenario despublica post");
        cy.url().then((url)=> cy.wrap(url).as('postUri'));
        postPage.checkUserView();
        cy.wait(2000);
    })

    it('Unpublish post',()=>{
        cy.get('@postUri').then(async (postUri)=>{ 
            await postPage.unpublishPost(postUri);
            await postPage.checkNotFound();
        });
    });

});