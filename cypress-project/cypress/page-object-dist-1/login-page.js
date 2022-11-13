let config = require('../../config.json')

export class LoginPage{

    constructor(){
        this.logInUrl = config.siteHost+config.logIn.logInUrl;
        this.usrTag = config.logIn.userTagIdentifier;
        this.usrText = config.logIn.userName;
        this.pssTag = config.logIn.passTagIdentifier;
        this.pssText = config.logIn.userPass;
        this.actionElement = config.logIn.actionElement;
        this.actionTag = config.logIn.actionElement;
        this.adminUrl = config.siteHost+config.logIn.nextUrlExpected;
    }

    doLogIn() {
        cy.visit(this.logInUrl);
        cy.get(this.usrTag).type(this.usrText);
        cy.get(this.pssTag).type(this.pssText);
        cy.get(this.actionTag).click({multiple: true, timeout:2000}).then(() =>{
            cy.url().should('eq',this.adminUrl);
        });
    }
}