let config = require('../../config.json');

export class PagesPage{

    constructor(){
        this.pagesUrl = config.siteHost+config.pages.pagesUrl;
        this.linkHref = config.siteHost+config.pages.creator.linkHref;
        this.titlePlaceHolder = config.pages.creator.titlePlaceholder;
        this.titleText = config.pages.creator.titleText;
        this.contentIdent = config.pages.creator.contentIdentifier;
        this.contentText = config.pages.creator.contentText;
        this.pagesListIdent = config.pages.pagesListIdentifier;
        this.buttonPageSetting = config.pages.eraser.buttonSetting;
        this.buttonDeletePage = config.pages.eraser.buttonDelete;
        this.modalButtonDelete = config.pages.eraser.modalButtonConfirm;
        this.publishButton = config.pages.creator.publishButton;
        this.publishConfirm = config.pages.creator.publishConfirm;
        this.tagInput = config.pages.tagg.input;
        this.tagSelected = config.pages.tagg.selectorCheck;
    }

    async createNewPage(hadPublish, sufix=""){
        this.titleText = this.titleText+sufix;       
        await cy.visit(this.pagesUrl).then(async ()=>{
            cy.wait(2000)
            await this.openEditorView();
            await this.fillPageContent();
            await this.publishPage(hadPublish);
        });
    }

    openEditorView(){ 
        cy.get('a').filter((index,link)=>{
            return link.href == this.linkHref;
        }).first().click();
    }

    fillPageContent(){
        cy.get("textarea").filter((index,area)=>{
            return area.placeholder == this.titlePlaceHolder;
        }).type(this.titleText);
        
        cy.get(this.contentIdent).click().type(this.contentText ,{force:true});
    }

    publishPage(hadPublish){
        if(hadPublish){
            cy.get(this.publishButton).click().then(()=>{
                cy.get(this.publishConfirm).click();
                cy.wait(2000);
            });
        }
    }

    validExistence(url, exist, tagName = ""){
        url = url+"/";
        cy.visit(this.pagesUrl).then(async ()=>{
            if(Cypress.$(this.pagesListIdent).lenght > 0){
                cy.get(this.pagesListIdent).filter((index,elementLink)=>{
                    return url == elementLink.href
                }).should('have.length', exist?1:0)
                .and('contain',tagName);
            }
        })  
    }

    deletePage(pageLink){
        cy.visit(pageLink).then(()=>{
            cy.get(this.buttonPageSetting).click({force:true}).then(async ()=>{
                await cy.get(this.buttonDeletePage).click({force:true});
                cy.wait(2000);
                await cy.get(this.modalButtonDelete).click({force:true});
            });
        });
    }

    addTag(tagName){
        cy.get(this.buttonPageSetting).click({force:true}).then(async ()=>{
            await cy.get(this.tagInput).type(tagName).then(()=>{
                cy.get(this.tagSelected).first().click();
            });
        });
    }

    checkUserView(){
        let publicPageUrl = config.siteHost+(this.titleText.replaceAll(" ","-"));
        cy.visit(publicPageUrl, {timeOut:3000}).contains(this.titleText);
    }
}