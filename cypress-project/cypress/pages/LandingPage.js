class LandingPage {
    constructor () {
        this.urlLanding = "http://20.102.114.58"
    }

    ValidatePost = (postTitle, postBody) => {
        cy.visit(this.urlLanding)
        cy.contains(postTitle)
        cy.contains(postBody)
    }

    ValidatePage = (pageTitle, pageBody, urlPage) => {
        cy.visit(this.urlLanding + '/' + urlPage)
        cy.contains(pageTitle)
        cy.contains(pageBody)
    }
}

export default new LandingPage();
