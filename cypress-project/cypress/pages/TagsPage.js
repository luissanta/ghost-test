class TagsPage {
    constructor () {
        this.buttonTags = "(//a[normalize-space()='Tags'])[1]"
    }

    validateTag = (tagName) => {
        cy.xpath(this.buttonTags).click()
        cy.contains(tagName)
    }
}

export default new TagsPage();
