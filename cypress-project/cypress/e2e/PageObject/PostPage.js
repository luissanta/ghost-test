require('cypress-xpath');
class PostPage {
    navigate() {
        cy.visit('http://localhost:2368/ghost/#/posts')
        //cy.visit('http://20.102.114.58/ghost/#/posts')
    }
    navigateIndex() {
        cy.visit('http://localhost:2368/')
        //cy.visit('http://20.102.114.58/')
    }

    elements = {
        usernameField : () => cy.get("#ember8"),
        selectUser : () => cy.xpath("//div[text()='demouser']"),
        passwordField : () => cy.get("#ember10"),
        passwordOption : () => cy.xpath("//div[text()='testingisfun99']"),
        loginBtn : () => cy.get("#ember12"),
        createBtn :() => cy.xpath("//a[@title= 'New post']"), 
        snamePostField :() => cy.xpath("//textarea[@id= 'ember112']"),
        namePostField :() => cy.xpath("//textarea[@class= 'gh-editor-title ember-text-area gh-input ember-view']"),
        selectPublish :() => cy.xpath("//div[@class= 'ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger']"),
        descriptionPostField : () => cy.xpath("//div[@data-kg='editor']"),
        publishBtn :() => cy.xpath("//button[@class= 'gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']"), 
        closeWindowPublish : () => cy.xpath("//button[@class= 'gh-btn gh-btn-outline gh-btn-link']"),
        findValuePostPublish: () => cy.xpath("//section[@class='post-card-excerpt']/p"),
        selectSetting: () => cy.xpath("//button[@title='Settings']"),
        listTag: () => cy.xpath("//input[@class='ember-power-select-trigger-multiple-input']"),
        selectTag: (name) => cy.xpath("(//div[@class='form-group']//li[normalize-space()='"+name+"'])"),
        //selectTag: (name) => cy.xpath("//ul[@class='ember-power-select-options']")
        listarFilterTag: () => cy.xpath("//div[contains(@class,'gh-contentfilter-menu gh-contentfilter-tag')]//div[contains(@role,'button')]"),
        
        selectFilterTag: (name) => cy.xpath("//li[normalize-space()='"+name+"']"),
        closePostSettings: () => cy.xpath("//button[@class='close settings-menu-header-action']"),
        findPostInFilter: () => cy.xpath("//h3[@class='gh-content-entry-title']"),
        
        
        //nav[@class='gh-nav ember-view']
        //div[@class='gh-contentfilter-menu gh-contentfilter-tag ']//div[@role='button']//*[name()='svg']
        //span[normalize-space()='All tags']
        //li[normalize-space()='hello']
        }
//cy.get('.koenig-editor__editor > p')
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

        createPost(){
            this.elements.createBtn().click();
        }

        enterNamePost(text) {
            this.elements.namePostField().clear().type(text);
            return this
        }

        enterDescriptionPost(text) {
            this.elements.descriptionPostField().clear().type(text);
            return this
        }

        selectPublish() {
            this.elements.selectPublish().click( {force: true});
            return this
        }

        publish() {
            this.elements.publishBtn().click({force: true});
            return this
        }

        selectSetting(){
            this.elements.selectSetting().click();
            return this            
        }

        listTag(){
            this.elements.listTag().eq(0).click();
            return this            
        }
        selectTag(text){
            this.elements.selectFilterTag(text).eq(0).click();
            /*this.elements.listTag().eq(0).as("options")
            cy
            .get("@options")
            .its('length')
            .then(len => Math.floor(Math.random() * Math.floor(len)))
            .then((index) => {
            cy.get("@options").eq(index).click({force: true})
            })
            return this        */    
        }
        findPostInFilter(texto){
            this.elements.findPostInFilter().first().contains(texto);          
        }


        closePostSettings(){
            
            this.elements.closePostSettings().click({force: true});
            return this 
        }

        listFilterTags(){
            this.elements.listarFilterTag().eq(0).click();
            return this            
        }
        selectFilterTag(text) {
            this.elements.selectFilterTag(text).eq(0).click();
            return this
        }

        closeWindowPublish(){
            this.elements.closeWindowPublish().click();
            return this
        }

        waitForPublish(){
            //button[@class= 'gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']/span
            cy.xpath("//button[2]/span").should('have.text',"Update");
            return this
            //this.elements.closeWindowPublish().click();            
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




}
export default PostPage