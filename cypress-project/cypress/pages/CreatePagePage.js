import takeScreenShot from '../utils/funcs.js';

class CreatePagePage {
    constructor () {
        this.buttonPages = "(//a[normalize-space()='Pages'])[1]"
        this.buttonCreatePage = "//span[normalize-space()='New page']"
        this.pageTitle = "//textarea[@placeholder='Page Title']"
        this.pageBody = "//div[@class='koenig-editor__editor __mobiledoc-editor __has-no-content']"

        this.buttonSetting = "//button[@title='Settings']//*[name()='svg']"
        this.nameTag = "//div[@id='tag-input']"
        this.buttonCloseTag = "//button[@aria-label='Close']"
        this.buttonReturnPages = "//a[@class='blue link fw4 flex items-center ember-view']"

        this.buttonPublish = "//span[normalize-space()='Publish']"
        this.buttonPublishNow = "//button[@class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']//span[contains(text(),'Publish')]"
        this.buttonReturnPages = "//a[@class='blue link fw4 flex items-center ember-view']"
        this.buttonCloseNotifyNewPage = "//button[@class='gh-notification-close']//*[name()='svg']//*[name()='path' and contains(@d,'M12.707 12')]"
    }

    createPage = (pageTitle, pageBody) => {
        cy.xpath(this.buttonPages).click()
        takeScreenShot();  
        cy.xpath(this.buttonCreatePage).click()
        cy.xpath(this.pageTitle).type(pageTitle)
        cy.xpath(this.pageBody).type(pageBody)
        takeScreenShot();  
    }

    createTagFromPage = (tagName) => {
        cy.xpath(this.buttonSetting).click()
        takeScreenShot();  
        cy.xpath(this.nameTag).type(tagName + '{enter}')
        cy.xpath(this.buttonCloseTag).click()
        takeScreenShot();  
        cy.xpath(this.buttonReturnPages).contains("Pages").click()
        takeScreenShot();  
    }

    publishPage = () => {
        cy.xpath(this.buttonPublish).click()
        takeScreenShot();  
        cy.xpath(this.buttonPublishNow).click()
        takeScreenShot();  
        cy.xpath(this.buttonReturnPages).contains("Pages").click()
        takeScreenShot();  
        cy.xpath(this.buttonCloseNotifyNewPage).click()
        takeScreenShot();  
    }
}

export default new CreatePagePage();
