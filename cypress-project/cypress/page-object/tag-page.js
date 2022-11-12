let config = require('../../config.json');

export class TagPage{

    constructor(){
        this.tagUrl = config.siteHost + config.tags.tagsUrl;
        this.linkHref = config.siteHost + config.tags.creator.linkHref;
        this.linkTitle = config.tags.creator.linkTitle;
        this.tagName = config.tags.creator.body.tagName;
        this.tagNameText = config.tags.creator.body.tagNameText;
        this.tagSlug = config.tags.creator.body.tagSlug;
        this.tagSlugText = config.tags.creator.body.tagSlugText;
        this.saveButton = config.tags.creator.saveButton;
        this.tagsListIdentifier = config.tags.tagsListIdentifier;
        this.tagGenUrl = this.tagUrl+"/"+this.tagNameText.replace(" ","-");
    }

    async createNewTag(){
        
        await cy.visit(this.tagUrl).then(async ()=>{
            await this.openCreatorView();
            await this.saveTagContent();
        });
    }

    openCreatorView(){ 
        cy.get('a').filter((index,link)=>{
            return link.href == this.linkHref;
        }).click();
    }

    async saveTagContent(){
        await cy.get(this.tagName).type(this.tagNameText);
        await cy.get(this.saveButton).click().then(()=>{
            cy.wait(2000);
            cy.visit(this.tagUrl);
        });
    }

    validExistence(exist){
        cy.url().then(()=>{
            this.url = this.tagGenUrl + "/";
            cy.visit(this.tagUrl).then(async ()=>{
                cy.get(this.tagsListIdentifier).filter((index,elementLink)=>{
                    return this.url == elementLink.href
                }).should('have.length', exist?1:0);
            })  
        })

    }

}