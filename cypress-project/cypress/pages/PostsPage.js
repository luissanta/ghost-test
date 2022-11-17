import takeScreenShot from '../utils/funcs.js';

class PostPage {
    constructor () {
        this.buttonDialogSchedules = "//span[@class='gh-notification-title']"
    }

    validateSchedulePost = (postTitle) => {
        cy.xpath(this.buttonDialogSchedules).contains("Scheduled")
        cy.contains(postTitle)
    }
}

export default new PostPage();
