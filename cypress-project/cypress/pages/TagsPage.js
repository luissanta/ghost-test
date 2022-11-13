let config = require('../../config.json')
class TagsPage {
    constructor () {
        this.buttonTags = "(//a[normalize-space()='Tags'])[1]"
    }

    validateTag = (tagName) => {
        cy.wait(2000)
        cy.visit(config.siteHost+'ghost/#/tags')
        cy.wait(2000)
        cy.contains(tagName)
    }
}

export default new TagsPage();
