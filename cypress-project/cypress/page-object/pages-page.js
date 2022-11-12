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
    }

    async createNewPage(){       
        await cy.visit(this.pagesUrl).then(async ()=>{
            await this.openEditorView();
            await this.fillPageContent();
        });
    }

    openEditorView(){ 
        cy.get('a').filter((index,link)=>{
            return link.href == this.linkHref;
        }).click();
    }

    fillPageContent(){
        cy.get("textarea").filter((index,area)=>{
            return area.placeholder == this.titlePlaceHolder;
        }).type(this.titleText);
        
        cy.get(this.contentIdent).click().type(this.contentText ,{force:true});
    }

    validExistence(exist = true, tagName = "" ){
        cy.url().then((url)=>{
            url = url+"/";
            cy.visit(this.pagesUrl).then(async ()=>{
                cy.get(this.pagesListIdent).filter((index,elementLink)=>{
                    console.log(elementLink);
                    return url == elementLink.href
                }).should('have.length', exist?1:0)
                .and('contain',tagName);
            })  
        })
    }

    deletePage(pageLink=null){
        if(pageLink == null){
            cy.get(this.pagesListIdent).then(async (elements)=>{
                pageLink = elements[0].href;
                await cy.visit(pageLink).then(()=>{
                    cy.get(this.buttonPageSetting).click({force:true}).then(async ()=>{
                        await cy.get(this.buttonDeletePage).click({force:true});
                        cy.wait(2000);
                        await cy.get(this.modalButtonDelete).click({force:true});
                    });
                });
                await this.validExistence(false);
            })
        }
    }

    addTag(tagName){
        cy.get(this.buttonPageSetting).click({force:true}).then(async ()=>{
            await cy.get("#tag-input").type(tagName).then(()=>{
                cy.get("li[class='ember-power-select-option']").first().click();
            });
        });
    }
}