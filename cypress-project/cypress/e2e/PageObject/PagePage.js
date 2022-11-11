require('cypress-xpath');
class PagePage {
    navigate() {        
        cy.visit('http://localhost:2368/ghost/#/pages')
        //cy.visit('http://20.102.114.58/ghost/#/pages')
    }
    navigatePage(page) {
        cy.visit('http://localhost:2368/'+page)
        //cy.visit('http://20.102.114.58/')
    }
    elements = {
        createBtn :() => cy.xpath("//span[normalize-space()='New page']"), 
        namePageField :() => cy.xpath("//textarea[@class= 'gh-editor-title ember-text-area gh-input ember-view']"),
        descriptionPageField : () => cy.xpath("//div[@data-kg='editor']"),
        selectPublish :() => cy.xpath("//div[@class= 'ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger']"),
        publishBtn :() => cy.xpath("//button[@class= 'gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']"), 
        closeWindowPublish : () => cy.xpath("//button[@class= 'gh-btn gh-btn-outline gh-btn-link']"),
        findValuePostPublish: () => cy.xpath("//section[@class='post-card-excerpt']/p"),
        titlePagePublished: (title) => cy.xpath("//h1[normalize-space()='"+title+"']"),
        descriptionPagePublished: (text) => cy.xpath("//p[normalize-space()='"+text+"']"),
        selectSetting: () => cy.xpath("//button[@title='Settings']"),
        listTag: () => cy.xpath("//input[@class='ember-power-select-trigger-multiple-input']"),
        selectFilterTag: (name) => cy.xpath("//li[normalize-space()='"+name+"']"),
        closePostSettings: () => cy.xpath("//button[@class='close settings-menu-header-action']"),
        }

    createPage(){
        this.elements.createBtn().click();
    }
    enterNamePage(text){        
        this.elements.namePageField().clear().type(text);
        return this
    }
    enterDescriptionPage(text)
    {
        this.elements.descriptionPageField().clear().type(text);
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

    waitForPublish(){
        //button[@class= 'gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']/span
        cy.xpath("//button[2]/span",{ timeout: 10000 }).should('have.text',"Update");
        return this
        //this.elements.closeWindowPublish().click();            
    }

    closeWindowPublish(){
        this.elements.closeWindowPublish().click();
        return this
    }

    validateTitlePagePublished(text){                        
        this.elements.titlePagePublished(text,{ timeout: 10000 }).should('have.text',text);    
        return this;
    }
    validateDescriptionPagePublished(description){                                
        this.elements.descriptionPagePublished(description).should('have.text',description);        
        return this;
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

    closePostSettings(){
            
        this.elements.closePostSettings().click({force: true});
        return this 
    }

}
export default PagePage