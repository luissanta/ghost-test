import takeScreenShot from '../utils/funcs.js';

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
        this.screenshotPath = config.pages.screenshotsPath;
    }

    createNewPage(hadPublish, sufix=""){
        this.titleText = this.titleText+sufix;       
        cy.visit(this.pagesUrl).then(()=>{
            takeScreenShot();
            this.openEditorView();
            this.fillPageContent();
            this.publishPage(hadPublish);
        });
    }

    openEditorView(){ 
        cy.get('a').filter((index,link)=>{
            return link.href == this.linkHref;
        }).first().click();
        takeScreenShot();
    }

    fillPageContent(){
        cy.get("textarea").filter((index,area)=>{
            return area.placeholder == this.titlePlaceHolder;
        }).type(this.titleText);
        cy.get(this.contentIdent).click().type(this.contentText ,{force:true});
        takeScreenShot();
    }

    publishPage(hadPublish){
        if(hadPublish){
            cy.get(this.publishButton).click().then(()=>{
                takeScreenShot();
                cy.get(this.publishConfirm).click();
                takeScreenShot();
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
            takeScreenShot();
        })  
    }

    deletePage(pageLink){
        cy.visit(pageLink).then(()=>{
            takeScreenShot();
            cy.get(this.buttonPageSetting).click({force:true}).then(()=>{
                takeScreenShot();
                cy.get(this.buttonDeletePage).click({force:true});
                takeScreenShot();
                cy.get(this.modalButtonDelete).click({force:true});
                takeScreenShot();
            });
        });
    }

    addTag(tagName){
        cy.get(this.buttonPageSetting).click({force:true}).then(()=>{
            cy.get(this.tagInput).type(tagName).then(()=>{
                cy.get(this.tagSelected).first().click();
                takeScreenShot();
            });
            takeScreenShot();
        });
    }

    checkUserView(){
        let publicPageUrl = config.siteHost+(this.titleText.replaceAll(" ","-"));
        cy.visit(publicPageUrl, {timeOut:3000}).contains(this.titleText);
        takeScreenShot();
    }
}