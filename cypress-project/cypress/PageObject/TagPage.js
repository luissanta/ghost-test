import takeScreenShot from '../utils/funcs.js';

let config = require('../../config.json');

class TagPage {
    navigate() {
        cy.visit(config.siteHost+'ghost/#/tags')
        takeScreenShot();  
    }

    elements = {
        usernameField : () => cy.get("#ember8"),
        selectUser : () => cy.xpath("//div[text()='demouser']"),
        passwordField : () => cy.get("#ember10"),
        passwordOption : () => cy.xpath("//div[text()='testingisfun99']"),
        loginBtn : () => cy.get("#ember12"),
        createBtn :() => cy.xpath("//a[@href='#/tags/new/']"), 
        snamePostField :() => cy.xpath("//textarea[@id= 'ember112']"),
        nameTagField :() => cy.xpath("//input[@id='tag-name']"),
        selectPublish :() => cy.xpath("//div[@class= 'ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger']"),
        descriptionPostField : () => cy.xpath("//div[@data-kg='editor']"),
        saveBtn :() => cy.xpath("//span[normalize-space()='Save']"), 
        closeWindowPublish : () => cy.xpath("//button[@class= 'gh-btn gh-btn-outline gh-btn-link']"),
        findValuePostPublish: () => cy.xpath("//section[@class='post-card-excerpt']/p"),
        selectTagCreated: (texto) => cy.xpath('//a[@title="List posts tagged with "'+texto+'"]'),
        countTagsByName: (name) => cy.xpath('//a[@title="List posts tagged with \''+name+'\'"]//span[@class="nowrap"]')
        }

        enterEmail(username) {
            this.elements.usernameField().clear().type(username);
            takeScreenShot();  
            return this
        }

        enterPassword(pswd) {
            this.elements.passwordField().clear().type(pswd);
            takeScreenShot();  
            return this
        }
        login(){
            this.elements.loginBtn().click();
            takeScreenShot();  
            return this
        }

        createTag(){
            this.elements.createBtn().eq(0).click();
            takeScreenShot();  
        }

        enterNameTag(text) {
            this.elements.nameTagField().clear().type(text, {force: true});
            takeScreenShot();  
            return this
        }

        enterDescriptionPost(text) {
            this.elements.descriptionPostField().clear().type(text);
            takeScreenShot();  
            return this
        }

        selectPublish() {
            this.elements.selectPublish().click();
            takeScreenShot();  
            return this
        }

        save() {
            this.elements.saveBtn().click();
            takeScreenShot();  
            return this
        }

        waitForSaveTag(){            
            cy.xpath("//span[normalize-space()='Save']").should('have.text',"Save");
            takeScreenShot();  
            return this            
        }

        closeWindowPublish(){
            this.elements.closeWindowPublish().click();
            takeScreenShot();  
            return this
        }

        waitForTag(){            
            cy.xpath("//span[normalize-space()='New tag']").should('have.text',"New tag");
            takeScreenShot();  
            return this            
        }

        waitForPublish(){            
            cy.xpath("//button[2]/span").should('have.text',"Update");
            takeScreenShot();  
            return this            
        }

        validateTagsByName(name, quantity){
            let moreThanOne = "s";
            if(quantity == 1){
                moreThanOne ="";
            }
            let namePost = quantity+" post"+moreThanOne;
            this.elements.countTagsByName(name).should('have.text', namePost);
            takeScreenShot();  
        }

        isModifyPost(text){                        
            this.elements.findValuePostPublish().each(($el,index) => {
                if($el.text() == text) {                                                           
                    expect($el.text()).to.eq(text);                    
                }else{
                    expect($el.text()).to.not.eq(text);
                }
                
            })     
            takeScreenShot();  
            return this;
        }
        uuidv4() {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
              (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
          }

}
export default TagPage