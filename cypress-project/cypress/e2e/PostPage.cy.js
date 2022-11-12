import LoginAdminPage from "./PageObject/LoginAdminPage"
import PostPage from "./PageObject/PostPage"
import TagPage from "./PageObject/TagPage"
import Utility from "./PageObject/Utility"

describe("Cypress POM Test Suite", function () {

    it("Edit post", function () {

        //given        
        const utility = new Utility();
        const login = new LoginAdminPage();
        let namePost = utility.uuidv4();
        let descriptionPost = utility.uuidv4();
        let newValueDescription = utility.uuidv4();

        //when
        login.login();
        const page = new PostPage();
        page.navigate();
        page.createPost();
        page.enterNamePost(namePost);
        page.enterDescriptionPost(descriptionPost);
        page.selectPublish();
        page.publish();        
        page.waitForPublish();        
        page.closeWindowPublish();        
        page.enterDescriptionPost(newValueDescription );
        page.selectPublish();
        page.publish();        
        page.waitForPublish();        
        page.closeWindowPublish();
        page.navigateIndex();

        //Then
        page.isModifyPost(newValueDescription);                
    });

    it("Assign a tag in a post", function () {

        //Given
        const utility = new Utility();
        let nameTag = utility.uuidv4();
        let namePost = "page"+utility.uuidv4();
        let descriptionPost = "description"+utility.uuidv4();

        //When
        const login = new LoginAdminPage();
        login.login();            
        const tag = new TagPage();
        cy.wait(1000);        
        tag.navigate();
        tag.waitForTag();  
        cy.wait(1000); 
        tag.createTag();
        tag.enterNameTag(nameTag);
        tag.save();
        tag.waitForSaveTag();
        const page = new PostPage();
        cy.wait(1000);  
        page.navigate();
        cy.wait(1000);  
        page.createPost();
        page.enterNamePost(namePost);
        page.enterDescriptionPost(descriptionPost);
        page.selectSetting();
        cy.wait(3000);  
        page.listTag();        
        page.selectTag(nameTag);
        page.closePostSettings();
        cy.wait(1000);  
        page.selectPublish();
        page.publish();     
        page.waitForPublish();        
        page.closeWindowPublish();
        page.navigate();
        cy.wait(3000);  
        page.listFilterTags();
        page.selectFilterTag(nameTag);

        //Then
        page.findPostInFilter(namePost);
    });

    it("FIlter tags to validate asociation post", function () {

        //Given
        const utility = new Utility();
        let nameTag = utility.uuidv4();
        let namePost = "post"+utility.uuidv4();
        let descriptionPost = "description"+utility.uuidv4();

        //When
        const login = new LoginAdminPage();      
        login.login();
        const tag = new TagPage();
        cy.wait(2000);        
        tag.navigate();
        tag.waitForTag();  
        cy.wait(1000); 
        tag.createTag();
        tag.enterNameTag(nameTag);
        tag.save();
        tag.waitForSaveTag();

        for (let i = 0; i <utility.getRandomInt(3) ; i++) {
            const page = new PostPage();
            cy.wait(1000);  
            page.navigate();
            cy.wait(1000);  
            page.createPost();
            page.enterNamePost(namePost);
            page.enterDescriptionPost(descriptionPost);
            cy.wait(1000);  
            page.selectPublish();
            page.publish();     
            page.waitForPublish();        
            page.closeWindowPublish();
            cy.wait(1000);  
          }
        let countPostWithTag = utility.getRandomInt(3)
          for (let i = 0; i < countPostWithTag ; i++) {
            const page = new PostPage();
            cy.wait(1000);  
            page.navigate();
            cy.wait(1000);  
            page.createPost();
            page.enterNamePost(namePost);
            page.enterDescriptionPost(descriptionPost);
    
            page.selectSetting();
            cy.wait(3000);  
            page.listTag();
            page.selectTag(nameTag);
            page.closePostSettings();
            cy.wait(2000);  
            page.selectPublish();
            cy.wait(2000);  
            page.publish();     
            page.waitForPublish();        
            page.closeWindowPublish();
            cy.wait(1000);
        }        
        tag.navigate();
        cy.wait(3000);

        //Then     
        tag.validateTagsByName(nameTag, countPostWithTag);
    });
});