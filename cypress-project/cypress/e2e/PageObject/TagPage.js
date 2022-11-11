require('cypress-xpath');
class TagPage {
    navigate() {
        cy.visit('http://localhost:2368/ghost/#/tags')
        //cy.visit('http://20.102.114.58/ghost/#/tags')
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
        //a[@title="List posts tagged with 'f86de0b8-d128-4370-8b53-eff51658c3f0'"]//span[@class='nowrap']
        }

        enterEmail(username) {
            this.elements.usernameField().clear().type(username);
            return this
        }

        enterPassword(pswd) {
            this.elements.passwordField().clear().type(pswd);
            return this
        }
        login(){
            this.elements.loginBtn().click();
            return this
        }

        createTag(){
            this.elements.createBtn().eq(0).click();
        }

        enterNameTag(text) {
            this.elements.nameTagField().clear().type(text, {force: true});
            return this
        }

        enterDescriptionPost(text) {
            this.elements.descriptionPostField().clear().type(text);
            return this
        }

        selectPublish() {
            this.elements.selectPublish().click();
            return this
        }

        save() {
            this.elements.saveBtn().click();
            return this
        }

        waitForSaveTag(){            
            cy.xpath("//span[normalize-space()='Save']").should('have.text',"Save");
            return this            
        }

        closeWindowPublish(){
            this.elements.closeWindowPublish().click();
            return this
        }

        waitForTag(){            
            cy.xpath("//span[normalize-space()='New tag']").should('have.text',"New tag");
            return this            
        }

        waitForPublish(){            
            cy.xpath("//button[2]/span").should('have.text',"Update");
            return this            
        }

        validateTagsByName(name, quantity){
            let moreThanOne = "s";
            if(quantity == 1){
                moreThanOne ="";
            }
            let namePost = quantity+" post"+moreThanOne;
            this.elements.countTagsByName(name).should('have.text', namePost);

        }

        isModifyPost(text){                        
            this.elements.findValuePostPublish().each(($el,index) => {
                if($el.text() == text) {                                                           
                    expect($el.text()).to.eq(text);                    
                }else{
                    expect($el.text()).to.not.eq(text);
                }
                
            })     
            return this;
        }
        uuidv4() {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
              (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
          }

}
export default TagPage