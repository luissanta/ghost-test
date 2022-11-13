let config = require('../../config.json');

class LoginAdminPage {
    navigate() {
        cy.visit(config.siteHost+'ghost')
        //cy.visit('http://20.102.114.58/ghost')
    }

    elements = {
        usernameField : () => cy.get("#ember8"),
        selectUser : () => cy.xpath("//div[text()='demouser']"),
        passwordField : () => cy.get("#ember10"),
        passwordOption : () => cy.xpath("//div[text()='testingisfun99']"),
        loginBtn : () => cy.get("#ember12")                
        }

        enterEmail(username) {
            this.elements.usernameField().clear().type(username);
            return this
        }

        enterPassword(pswd) {
            this.elements.passwordField().clear().type(pswd);
            return this
        }
        clickLogin(){
            this.elements.loginBtn().click();
            return this
        }

        login(){
            this.navigate();
            // this.enterEmail("mj.beltran37@uniandes.edu.co");
            // this.enterPassword("localhostghowst");
            this.enterEmail(config.logIn.userName);
            this.enterPassword(config.logIn.userPass);
            this.clickLogin();            
        }



}
export default LoginAdminPage