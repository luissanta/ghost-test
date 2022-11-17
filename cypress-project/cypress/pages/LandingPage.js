import takeScreenShot from '../utils/funcs.js';

let config = require('../../config.json')

class LandingPage {
    constructor () {
        this.urlLanding = config.siteHost;
    }

    ValidatePost = (postTitle, postBody) => {
        cy.visit(this.urlLanding)
        takeScreenShot();  
        cy.contains(postTitle)
        cy.contains(postBody)
        takeScreenShot();  
    }

    ValidatePage = (pageTitle, pageBody, urlPage) => {
        cy.visit(this.urlLanding + urlPage)
        takeScreenShot();  
        cy.contains(pageTitle)
        cy.contains(pageBody)
        takeScreenShot();  
    }
}

export default new LandingPage();
