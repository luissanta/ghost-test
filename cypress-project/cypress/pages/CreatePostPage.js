import takeScreenShot from '../utils/funcs.js';

class CreatePostPage {
    constructor () {
        this.buttonPosts = "//a[@class='ember-view']"
        this.buttonCreatePost = "//span[normalize-space()='New post']"
        this.postTitle = "//textarea[@placeholder='Post Title']"
        this.postBody = "//div[@class='koenig-editor__editor __mobiledoc-editor __has-no-content']"

        this.buttonPublish = "//span[normalize-space()='Publish']"
        this.buttonPublishNow = "//button[@class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']//span[contains(text(),'Publish')]"
        this.buttonReturnPosts = "//a[@class='blue link fw4 flex items-center ember-view']"
        this.buttonCloseNotifyNewPosts = "//button[@class='gh-notification-close']//*[name()='svg']//*[name()='path' and contains(@d,'M12.707 12')]"

        this.buttonSetting = "//button[@title='Settings']//*[name()='svg']"
        this.nameTag = "//div[@id='tag-input']"
        this.buttonCloseTag = "//button[@aria-label='Close']"

        this.radioButtonSelectSchedulesPost = "//div[@class='gh-publishmenu-radio ']//div[@class='gh-publishmenu-radio-button']"
        this.buttonSchedulesPost = "//span[normalize-space()='Schedule']"
    }

    createPost = (postTitle, postBody) => {
        cy.xpath(this.buttonPosts).contains("Post").click({force: true})
        takeScreenShot();  
        cy.xpath(this.buttonCreatePost).click()
        takeScreenShot();  
        cy.xpath(this.postTitle).type(postTitle)
        cy.xpath(this.postBody).type(postBody)
        takeScreenShot();  
    }

    publishPost = () => {
        cy.xpath(this.buttonPublish).click()
        takeScreenShot();  
        cy.xpath(this.buttonPublishNow).click()
        takeScreenShot();  
        cy.xpath(this.buttonReturnPosts).contains("Posts").click()
        takeScreenShot();  
        cy.xpath(this.buttonCloseNotifyNewPosts).click()
        takeScreenShot();  
    }

    createTagFromPost = (tagName) => {
        cy.xpath(this.buttonSetting).click()
        takeScreenShot();  
        cy.xpath(this.nameTag).type(tagName + '{enter}')
        takeScreenShot();  
        cy.xpath(this.buttonCloseTag).click()
        takeScreenShot();  
        cy.xpath(this.buttonReturnPosts).contains("Posts").click()
        takeScreenShot();  
    }

    schedulePostPublication = () => {
        cy.xpath(this.buttonPublish).click()
        takeScreenShot();  
        cy.xpath(this.radioButtonSelectSchedulesPost).click()
        takeScreenShot();  
        cy.xpath(this.buttonSchedulesPost).click()
        takeScreenShot();  
        cy.xpath(this.buttonReturnPosts).contains("Posts").click()
        takeScreenShot();  
    }
}

export default new CreatePostPage();
