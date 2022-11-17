import { takeScreenShot } from '../utils/funcs.js';
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
        this.tagGenUrl = this.tagUrl+"/"+this.tagNameText.replaceAll(" ","-");
    }

    createNewTag(){
        cy.visit(this.tagUrl).then(async ()=>{
            takeScreenShot();
            this.openCreatorView();
            this.saveTagContent();
        });
    }

    openCreatorView(){ 
        cy.get('a').filter((index,link)=>{
            return link.href == this.linkHref;
        }).first().click();
        takeScreenShot();
    }

    saveTagContent(){
        cy.get(this.tagName).type(this.tagNameText);
        cy.get(this.saveButton).click().then(()=>{
            takeScreenShot();
            cy.visit(this.tagUrl);
            takeScreenShot();
        });
    }

    validExistence(exist){
        cy.url().then(()=>{
            this.url = this.tagGenUrl + "/";
            cy.visit(this.tagUrl).then(async ()=>{
                if(Cypress.$(this.tagsListIdentifier).lenght > 0){
                    cy.get(this.tagsListIdentifier).filter((index,elementLink)=>{
                        return this.url == elementLink.href
                    }).should('have.length', exist?1:0);
                }
            });
            
            takeScreenShot();
        })

    }

}