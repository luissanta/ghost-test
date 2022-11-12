let config = require('../../config.json');

export class PostPage{


    constructor(){
        this.postUrl = config.siteHost+config.post.postUrl;
        this.linkTitle = config.post.creator.linkTitle;
        this.linkHref = config.siteHost + config.post.creator.linkHref;
        this.titleText = config.post.creator.titleText;
        this.titlePlaceholder = config.post.creator.titlePlaceholder;
        this.contentIdent = config.post.creator.contentIdentifier;
        this.contentText = config.post.creator.contentText;
        this.postListIdent = config.post.postListIdentifier;
        this.buttonPostSetting = config.post.eraser.buttonSetting;
        this.buttonDeletePost = config.post.eraser.buttonDelete;
        this.modalButtonDelete = config.post.eraser.modalButtonConfirm;
        this.publishButton = config.post.creator.publishButton;
        this.publishConfirm = config.post.creator.publishConfirm;
    }

    createNewPost(hadPublish = false, sufix=""){
        this.titleText = this.titleText+sufix;
        cy.visit(this.postUrl).then(async ()=>{
            cy.wait(2000);
            await this.openEditorView();
            await this.fillPostContent();
            await this.publishPost(hadPublish);
            cy.wait(2000);
        });
    }

    openEditorView(){ 
        cy.get('a').filter((index,link)=>{
            return link.href == this.linkHref && link.title != undefined && link.title == this.linkTitle;
        }).click();
    }

    fillPostContent(){
        cy.get("textarea").filter((index,area)=>{
            return area.placeholder == this.titlePlaceholder;
        }).type(this.titleText);
        cy.get(this.contentIdent).click().type(this.contentText,{force:true});

    }

    publishPost(hadPublish){
        if(hadPublish){
            cy.get(this.publishButton).click().then(()=>{
                cy.get(this.publishConfirm).click();
                cy.wait(2000);
            });
        }
    }


    validExistence(url, exist = true, tagName = ""){
        url = url+"/";
        cy.visit(this.postUrl).then(async ()=>{
            cy.get(this.postListIdent).filter((index,elementLink)=>{
                return url == elementLink.href
            }).should('have.length', exist?1:0)
            .and('contain',tagName);
        })  
    }


    deletePost(postLink){
        cy.visit(postLink).then(()=>{
            cy.get(this.buttonPostSetting).click({force:true}).then(async ()=>{
                await cy.get(this.buttonDeletePost).click({force:true});
                cy.wait(2000);
                await cy.get(this.modalButtonDelete).click({force:true});
            });
        });
    }

    addTag(tagName){
        cy.get(this.buttonPostSetting).click({force:true}).then(async ()=>{
            await cy.get("#tag-input").type(tagName).then(()=>{
                cy.get("li[class='ember-power-select-option']").first().click();
            });
        });
    }

    checkUserView(){
        let publicPostUrl = config.siteHost+(this.titleText.replaceAll(" ","-"));
        cy.visit(publicPostUrl, {timeOut:3000}).contains(this.titleText);
    }

    unpublishPost(postLink){
        cy.visit(postLink).then(()=>{
            
            cy.get(this.publishButton).click({force:true}).then(async ()=>{
                await cy.get(".gh-publishmenu-radio").first().click({force:true});
                await cy.get(this.publishConfirm).click({force:true});
                cy.wait(2000);
            });
        });
    }

    checkNotFound(){
        let publicPostUrl = config.siteHost+(this.titleText.replaceAll(" ","-"));
        cy.request({url:publicPostUrl,failOnStatusCode: false,method:"GET"}).should((response)=>{
            return response.status == 404;
        })
    }
}