class LoginAdminPage {
    navigate() {
        cy.visit('http://localhost:2368/ghost')
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
            this.enterEmail("mj.beltran37@uniandes.edu.co");
            this.enterPassword("localhostghowst");
            //this.enterEmail("da.ramirez55@uniandes.edu.co");
            //this.enterPassword("Cg94F4J&$#i8qjX@a9iP");
            this.clickLogin();            
        }



}
export default LoginAdminPage