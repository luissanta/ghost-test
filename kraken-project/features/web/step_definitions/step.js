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


// Validate post in landing page
Then('I find the title of the published post {string}', async function(postTitle){
    let element = await this.driver.$$("//h2[normalize-space()='"+postTitle+"']");
    expect(element.length).to.greaterThan(0);
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


// Schedule post publication
When('I press the button to schedule post publication', async function () {
    let element = await this.driver.$("//div[@class='gh-publishmenu-radio ']//div[@class='gh-publishmenu-radio-button']");
    await element.click();
})
When('I press the button to confirm the scheduled publication of the post', async function () {
    let element = await this.driver.$("//span[normalize-space()='Schedule']");
    await element.click();
})


// Validate the dialog whit scheduled publication
Then('I find the dialog whit scheduled publication', async function(){
    let element = await this.driver.$$("(//a[normalize-space()='Tags'])[1]");
    expect(element.length).to.greaterThan(0);
})


// Create tag from post or page
When('I press the button to configuration', async function () {
    let element = await this.driver.$("//button[@title='Settings']//*[name()='svg']");
    await element.click();
})
When('I fill the tag field {string}', async function (tagName) {
    let element = await this.driver.$("//div[@id='tag-input']");
    await element.setValue(tagName);
});
When('I save the tag', async function () {
    let element = await this.driver.$("//li[@role='option']");
    await element.click();
});
When('I close the configuration', async function () {
    let element = await this.driver.$("//button[@aria-label='Close']");
    await element.click();
});
When('I press the button to return to the tag list', async function () {
    let element = await this.driver.$("(//a[normalize-space()='Tags'])[1]");
    await element.click();
});


// Validate tag
When('I find the tag {string}', async function(tagName){
    let element = await this.driver.$$("//h3[normalize-space()='"+tagName+"']");
    expect(element.length).to.greaterThan(0);
})


// Create page
When('I enter the list of pages', async function () {
    let element = await this.driver.$("(//a[normalize-space()='Pages'])[1]");
    await element.click();
})
When('I press the create page button', async function () {
    let element = await this.driver.$("//span[normalize-space()='New page']");
    await element.click();
})
When('I fill the page title field {string}', async function (pageTitle) {
    let element = await this.driver.$("//textarea[@placeholder='Page Title']");
    await element.setValue(pageTitle);
})
When('I fill the page body field {string}', async function (pageBody) {
    let element = await this.driver.$("//div[@class='koenig-editor__editor __mobiledoc-editor __has-no-content']");
    await element.setValue(pageBody);
})
When('I press the publish page button', async function () {
    let element = await this.driver.$("//span[normalize-space()='Publish']");
    await element.click();
})
When('I press the button to confirm the publication of a page', async function () {
    let element = await this.driver.$("//button[@class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']//span[contains(text(),'Publish')]");
    await element.click();
})
When('I press the button to return to the page list', async function () {
    let element = await this.driver.$("//a[@class='blue link fw4 flex items-center ember-view']");
    await element.click();
})
When('I press the button to close the confirmation modal of the publication of a page', async function () {
    let element = await this.driver.$("//button[@class='gh-notification-close']//*[name()='svg']//*[name()='path' and contains(@d,'M12.707 12')]");
    await element.click();
})


// Validate post in landing page
Then('I find the title of the published page {string}', async function(pageTitle){
    let element = await this.driver.$$("//h1[normalize-space()='"+pageTitle+"']");
    expect(element.length).to.greaterThan(0);
})
