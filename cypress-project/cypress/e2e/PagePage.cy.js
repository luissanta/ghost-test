import LoginAdminPage from "../PageObject/LoginAdminPage"
import PagePage from "../PageObject/PagePage"
import TagPage from "../PageObject/TagPage"
import Utility from "../PageObject/Utility"

describe("Cypress POM Test Suite", function () {


    it("Edit and publish a page", function () {

        //Given
        const utility = new Utility();
        let namePage1 = "page"+utility.uuidv4();
        let namePage2 = "page"+utility.uuidv4();
        let descriptionPage1 = utility.uuidv4();
        let descriptionPage2 = utility.uuidv4();

        //When
        const login = new LoginAdminPage();        
        login.login();
        
        //Page1
        const page = new PagePage();
        cy.wait(1000);  
        page.navigate();
        cy.wait(1000);  
        page.createPage();
        page.enterNamePage(namePage1);
        page.enterDescriptionPage("hid");
        cy.wait(1000);  
        page.selectPublish();
        page.publish();     
        page.waitForPublish();        
        page.closeWindowPublish();
        cy.wait(1000);
        page.enterDescriptionPage(descriptionPage1);
        page.selectPublish();
        page.publish();     
        page.waitForPublish();  
        //Page2  
        cy.wait(1000); 
        const page2 = new PagePage();
        cy.wait(1000);  
        page2.navigate();
        cy.wait(1000);  
        page2.createPage();
        page2.enterNamePage(namePage2);
        page2.enterDescriptionPage("hid");
        cy.wait(1000);  
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();        
        page2.closeWindowPublish();
        cy.wait(1000);
        page2.enterDescriptionPage(descriptionPage2);
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();   
        cy.wait(1000);
        //Then
        page.navigatePage(namePage1);
        cy.wait(2000);
        page.validateTitlePagePublished(namePage1);  
        cy.wait(2000);
        //page.validateDescriptionPagePublished(descriptionPage1);
        cy.wait(2000); 
        page2.navigatePage(namePage2);
        cy.wait(2000);
        //page2.validateDescriptionPagePublished(descriptionPage2);  
          
        
    });

    it("Create a tag and assign in 2 different pages", function () {

        //Given
        const utility = new Utility();
        let nameTag = utility.uuidv4();
        let namePage1 = "page"+utility.uuidv4();
        let namePage2 = "page"+utility.uuidv4();
        let descriptionPage1 = utility.uuidv4();
        let descriptionPage2 = utility.uuidv4();
        let countPostWithTag = 2;

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

        //Page1
        const page = new PagePage();
        cy.wait(1000);  
        page.navigate();
        cy.wait(1000);  
        page.createPage();
        page.enterNamePage(namePage1);
        page.enterDescriptionPage("hid");
        cy.wait(1000);  
        page.selectPublish();
        page.publish();     
        page.waitForPublish();        
        page.closeWindowPublish();
        //Edit Description
        page.enterDescriptionPage(descriptionPage1);
        page.selectPublish();
        page.publish();     
        page.waitForPublish();  

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
        //Page2  
        cy.wait(1000); 
        const page2 = new PagePage();
        cy.wait(1000);  
        page2.navigate();
        cy.wait(1000);  
        page2.createPage();
        page2.enterNamePage(namePage2);
        page2.enterDescriptionPage("hid");
        cy.wait(1000);  
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();        
        page2.closeWindowPublish();
        //Edit Description
        page2.enterDescriptionPage(descriptionPage2);
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();   

        page2.selectSetting();
        cy.wait(3000);  
        page2.listTag();
        page2.selectTag(nameTag);
        page2.closePostSettings();
        cy.wait(2000);  
        page2.selectPublish();
        cy.wait(2000);  
        page2.publish();     
        page2.waitForPublish();        
        page2.closeWindowPublish();
        cy.wait(1000);
          
        //Then
        page.navigatePage(namePage1);
        cy.wait(2000)
        page.validateTitlePagePublished(namePage1);  
        cy.wait(2000)
        //page.validateDescriptionPagePublished(descriptionPage1);  
        cy.wait(2000)
        page2.navigatePage(namePage2);
        //page2.validateDescriptionPagePublished(descriptionPage2);  
        tag.navigate();
        cy.wait(3000);          
        tag.validateTagsByName(nameTag, countPostWithTag);
        
    });
});