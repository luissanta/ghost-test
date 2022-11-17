const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const data = require('../../../properties.json');
// Login
Given('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$("//input[@type='email']");
    await element.setValue(email);
});
Given('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$("//input[@type='password']");
    await element.setValue(password);
});
Given('I click sign in', async function () {
    let element = await this.driver.$("//span[contains(text(),'Sign in →')]");
    await element.click();
});


// Create post
When('I enter the list of posts', async function () {
    let element = await this.driver.$("//a[@class='ember-view']");
    await element.click();
})
When('I press the create post button', async function () {
    let element = await this.driver.$("//a[contains(@title,'New post')]//span");
    await element.click();
})
When('I fill the post title field {string}', async function (postTitle) {
    let element = await this.driver.$("//textarea[@placeholder='Post title']");
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


// Validate post in admin page
When('I find the title of the post {string}', async function(postTitle){
    let element = await this.driver.$$("//h3[normalize-space()='"+postTitle+"']");
    expect(element.length).to.greaterThan(0);
})


// Publish post
When('I press the publish button', async function () {
    let element = await this.driver.$("//span[normalize-space()='Publish']");
    await element.click();
})
When('I press the button to confirm the publication of a post', async function () {
    let element = await this.driver.$("//button[contains(@class,'gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view')]//span[contains(text(),'Publish')]");    
    await element.click();
})

When('I press the button the confirmation modal publish', async function () {    
    let element = await this.driver.$("//button[contains(@class,'gh-btn gh-btn-black gh-btn-icon ember-view')]//span[contains(text(),'Publish')]");
    await element.click();

})
When('I press the button the confirmation modal publish schedule', async function () {
    let element = await this.driver.$("//span[normalize-space()='Schedule']");
    await element.click();

})

When('I press the button to return to the post list', async function () {
    let element = await this.driver.$("//span[normalize-space()='Posts']");
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
    let element = await this.driver.$("//span[@class='settings-menu-open']");
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
    let element = await this.driver.$("(//a[@href='#/pages/'])[1]");
    await element.click();
})
When('I press the create page button', async function () {
    let element = await this.driver.$("//span[normalize-space()='New page']");
    await element.click();
})
When('I fill the page title field {string}', async function (pageTitle) {
    let element = await this.driver.$("//textarea[@placeholder='Page title']");                                       
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
    let element = await this.driver.$("//button[contains(@class,'gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view')]//span[contains(text(),'Publish')]");                                       
    await element.click();
})
When('I press the button to return to the page list', async function () {
    let element = await this.driver.$("//span[normalize-space()='Pages']");
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


// Delete post
When('I select the post to delete', async function () {
    let element = await this.driver.$("//a[@title='Edit this post']");
    await element.click();
})
When('I press the delete post button', async function () {
    let element = await this.driver.$("//span[normalize-space()='Delete post']");
    await element.click();
})
When('I press the button to confirm deletion of the post', async function () {
    let element = await this.driver.$("//span[normalize-space()='Delete']");
    await element.click();
})


// Validate delete post
Then('I can not find any post in the list', async function(){
    let element = await this.driver.$$("//span[normalize-space()='Write a new post']");
    expect(element.length).to.equal(1);
})


// Clear ghost

Given('I press the config button', async function () {
    //let element = await this.driver.$("//a[@class='active ember-view gh-nav-bottom-tabicon']");
    //await element.click();
    let tempUrl = data.siteHost+"/ghost/#/settings/labs";    
    await this.driver.url(tempUrl);
});
Given('I press the labs button', async function () {
    //let element = await this.driver.$("(//a[normalize-space()='Labs'])[1]");
    //await element.click();
    let tempUrl = data.siteHost+"/ghost/#/settings/labs";    
    await this.driver.url(tempUrl);
});
Given('I press the delete all button', async function () {
    let element = await this.driver.$("//span[normalize-space()='Delete']");         
    await element.click();
});
Given('I press the confirm delete all button', async function () {
    let element = await this.driver.$("//button[@class='gh-btn gh-btn-red gh-btn-icon ember-view']");
    await element.click();
});
Given('I press the button close deletion alert', async function () {
    let element = await this.driver.$("//button[@class='gh-alert-close']");
    await element.click();
});


// Validate page in admin page
When('I find the title of the page {string}', async function(pageTitle){
    let element = await this.driver.$$("//h3[normalize-space()='"+pageTitle+"']");
    expect(element.length).to.greaterThan(0);
})


// Delete page
When('I select the page to delete', async function () {
    let element = await this.driver.$("//a[@title='Edit this page']");
    await element.click();
})
When('I press the delete page button', async function () {
    let element = await this.driver.$("//span[normalize-space()='Delete page']");
    await element.click();
})
When('I press the button to confirm deletion of the page', async function () {
    let element = await this.driver.$("//span[normalize-space()='Delete']");
    await element.click();
})


// Validate delete page
Then('I can not find any page in the list', async function(){
    let element = await this.driver.$$("//span[normalize-space()='Create a new page']");
    expect(element.length).to.equal(1);
})


// Create tag
When('I press the create tag button', async function () {
    let element = await this.driver.$("//span[normalize-space()='New tag']");
    await element.click();
})
When('I fill the tag name field {string}', async function(tagName){
    let element = await this.driver.$("//input[@id='tag-name']");
    await element.setValue(tagName);
})
When('I press the save tag button', async function () {
    let element = await this.driver.$("//span[normalize-space()='Save']");
    await element.click();
})


// Associate tag to post
When('I press on the tag to associate', async function () {
    let element = await this.driver.$("//li[@aria-current='true']");
    await element.click();
})
