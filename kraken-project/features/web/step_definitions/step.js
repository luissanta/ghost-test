const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

// Login
Given('I enter email {string}', async function (email) {
    let element = await this.driver.$("//input[@type='email']");
    await element.setValue(email);
});

Given('I enter password {string}', async function (password) {
    let element = await this.driver.$("//input[@type='password']");
    await element.setValue(password);
});

Given('I click sign in', async function () {
    let element = await this.driver.$("//span[normalize-space()='Sign in']");
    await element.click();
});

// Create post
When('I enter the list of posts', async function () {
    let element = await this.driver.$("//a[@class='ember-view']");
    await element.click();
})
When('I press the create post button', async function () {
    let element = await this.driver.$("//span[normalize-space()='New post']");
    await element.click();
})
When('I fill the post title field {string}', async function (postTitle) {
    let element = await this.driver.$("//textarea[@placeholder='Post Title']");
    await element.setValue(postTitle);
})
When('I fill the post body field {string}', async function (postBody) {
    let element = await this.driver.$("//div[@class='koenig-editor__editor __mobiledoc-editor __has-no-content']");
    await element.setValue(postBody);
})

// Publish post
When('I press the publish button', async function () {
    let element = await this.driver.$("//span[normalize-space()='Publish']");
    await element.click();
})
When('I press the button to confirm the publication of a post', async function () {
    let element = await this.driver.$("//button[@class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']//span[contains(text(),'Publish')]");
    await element.click();
})
When('I press the button to return to the post list', async function () {
    let element = await this.driver.$("//a[@class='blue link fw4 flex items-center ember-view']");
    await element.click();
})
When('I press the button to close the confirmation modal of the publication of a post', async function () {
    let element = await this.driver.$("//button[@class='gh-notification-close']//*[name()='svg']//*[name()='path' and contains(@d,'M12.707 12')]");
    await element.click();
})

// Validate in landing page the published post
Then('I find the title of the published post {string}', async function (postTitle) {
    let element = await this.driver.$("//article[1]//div[1]//a[1]//header[1]//h2[1]");
    await expect(element).contains(postTitle);
});

// Then('I find the body of the published post', async function (postBody) {
//     let element = await this.driver.$("//article[1]//div[1]//a[1]//section[1]//p[1]");
//     await element.click();
// });



// Schedule post publication
When('I press the button to schedule post publication', async function () {
    let element = await this.driver.$("//div[@class='gh-publishmenu-radio ']//div[@class='gh-publishmenu-radio-button']");
    await element.click();
})
When('I press the button to confirm the scheduled publication of the post', async function () {
    let element = await this.driver.$("//span[normalize-space()='Schedule']");
    await element.click();
})
