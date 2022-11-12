const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

//Login
When('I enter email {string}', async function (email) {
    let element = await this.driver.$('#ember8');
    return await element.setValue(email);
});
When('I enter password {string}', async function (password) {
    let element = await this.driver.$('#ember10');
    return await element.setValue(password);
});
When('I click next', async function() {
    let element = await this.driver.$('#ember12');
    return await element.click();
})

//Page
Then('I click on the first conversation', async function () {
    let element = await this.driver.$('.x1av1boa > div:nth-child(1) > div:nth-child(1)');
    return await element.click();
});
Then('I click on the redact message inputbox', async function () {
    let element = await this.driver.$('p.xat24cr');
    return await element.click();
  });
  Then('I send the message', async function () {
    let element = await this.driver.$('span.x3nfvp2:nth-child(3)');
    return await element.click();
});

Then('I click Create page', async function () {
    let element = await this.driver.$('a[class="ember-view gh-btn gh-btn-green"] span');
    return await element.click();
});

When('I enter name page {string}', async function (name) {
    let element = await this.driver.$("//textarea[@class= 'gh-editor-title ember-text-area gh-input ember-view']");
    return await element.setValue(name);
});

When('I enter description page {string}', async function (name) {
    let element = await this.driver.$("//div[@data-kg='editor']");
    return await element.setValue(name);
});

Then('I should see {string}', async function(name){
    let element = await this.driver.$$('//p[normalize-space()="'+name+'"]');
    expect(element.length).to.equal(1);    
})

//Common
When('I click on setting', async function () {
    let element = await this.driver.$("//button[@title='Settings']");
    return await element.click();
});

When('I click on close setting', async function () {
    let element = await this.driver.$("//button[@aria-label='Close']//*[name()='svg']");
    return await element.click();
});

When('I click selectPublish', async function() {
    let element = await this.driver.$("div[class='gh-publishmenu ember-view'] span");
    return await element.click();
})

When('I click publish', async function() {
    let element = await this.driver.$("//button[@class= 'gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']");    
    return await element.click();
})

When('I click on close publish window', async function() {
    let element = await this.driver.$("//button[@class= 'gh-btn gh-btn-outline gh-btn-link']");
    return await element.click();
})
When('I click on delete page', async function () {
    let element = await this.driver.$("//span[normalize-space()='Delete page']");
    return await element.click();
});

When('I click on accept delete page', async function () {
    let element = await this.driver.$("//span[normalize-space()='Delete']");
    return await element.click();
});

When('I click on return to pages', async function () {
    let element = await this.driver.$("//a[@class='blue link fw4 flex items-center ember-view']");
    return await element.click();
});

Then('I should validate page is deleted {string}', async function (name) {
    let element = await this.driver.$$('//h3[normalize-space()= \''+name+'\']');    
    expect(element.length).to.equal(0);
});


//Tags

When('I click on tags filter', async function () {
    let element = await this.driver.$("//span[normalize-space()='All tags']");
    return await element.click();
});

When('I click on create tag', async function() {
    let element = await this.driver.$$("//a[@href='#/tags/new/']");
    return await element[0].click();
})

When('I click on list tags', async function () {
    let element = await this.driver.$("//input[@class='ember-power-select-trigger-multiple-input']");
    return await element.click();
});

When('I enter name tag {string}', async function (name) {
    let element = await this.driver.$("//input[@id='tag-name']");
    return await element.setValue(name);
});
 
When('I click on save tag', async function () {
    let element = await this.driver.$("//span[normalize-space()='Save']");
    return await element.click();
});

When('I click on exist tag {string}', async function (name) {
    let element = await this.driver.$("//li[normalize-space()='"+name+"']");
    return await element.click();
});

Then('I should validate tag {string}', async function (name) {
    let element = await this.driver.$$("//h3[normalize-space()='"+name+"']");
    expect(element.length).to.equal(1);
});       

Then('I should validate tag in pages {string}', async function (name) {

    let element = await this.driver.$$("//span[normalize-space()='1 post']");
    expect(element.length).to.greaterThan(0);    
});   

//Post
When('I click on delete post', async function () {
    let element = await this.driver.$("//span[normalize-space()='Delete post']");
    return await element.click();
});

When('I click on accept delete post', async function () {
    let element = await this.driver.$("//span[normalize-space()='Delete']");
    return await element.click();
});

When('I click Create post', async function () {
    let element = await this.driver.$("//a[@title= 'New post']");
    return await element.click();
});

When('I enter name post {string}', async function (name) {
    let element = await this.driver.$("//textarea[@class= 'gh-editor-title ember-text-area gh-input ember-view']");
    return await element.setValue(name);
});
            
When('I enter description post {string}', async function (name) {
    let element = await this.driver.$("//div[@data-kg='editor']");
    return await element.setValue(name);
});

When('I click on select filter allpost', async function () {
    let element = await this.driver.$("//div[@class='gh-contentfilter-menu gh-contentfilter-type ']//div[@role='button']");
    return await element.click();
});

When('I click on filter draft post', async function () {
    let element = await this.driver.$("//li[normalize-space()='Draft posts']");
    return await element.click();
});

When('I click on save draft post', async function () {
    let element = await this.driver.$("//textarea[@placeholder='Post Title']");
    return await element.click();
});

When('I click on return to posts', async function () {
    let element = await this.driver.$("//a[@class='blue link fw4 flex items-center ember-view']");
    return await element.click();
});


Then('I should validate post the home {string}', async function (name) {
    let element = await this.driver.$$("//section[@class='post-card-excerpt']/p");    
    expect(element.length).to.greaterThan(0);
});

Then('I should validate post is linked to tags {string}', async function (name) {
    let element = await this.driver.$$('//div[normalize-space()= \''+name+'\']');    
    expect(element.length).to.greaterThan(1);
});

Then('I should validate post is deleted {string}', async function (name) {
    let element = await this.driver.$$('//h3[normalize-space()= \''+name+'\']');    
    expect(element.length).to.equal(0);
});

Then('I should validate post is linked to tag1', async function () {
    let element = await this.driver.$$("//h3[@class='gh-content-entry-title']");    
    expect(element.length).to.greaterThan(0);
});

Then('I should validate tag in page {string}', async function (name) {
    let element = await this.driver.$$('//a[@title="List posts tagged with \''+name+'\'"]//span[@class="nowrap"]');
    expect(element.length).to.equal(1);
});

Then('I should validate post exist {string}', async function (name) {
    let element = await this.driver.$$('//h3[normalize-space()= \''+name+'\']');    
    expect(element.length).to.equal(2);
});

//Clean


// Clear ghost
Given('I clean data', async function () {
    let element = await this.driver.$("(//a[normalize-space()='Labs'])[1]");
    await element.click();
    let element1 = await this.driver.$("//span[normalize-space()='Delete']");
    await element1.click();
});
Given('I accept clean data', async function () {   
    let element4 = await this.driver.$("//button[@class='gh-btn gh-btn-red gh-btn-icon ember-view']");
    await element4.click();
});
Given('I press the button close deletion alert', async function () {
    let element = await this.driver.$("//button[@class='gh-alert-close']");
    await element.click();
});