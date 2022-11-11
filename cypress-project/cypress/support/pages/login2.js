class LoginPage {

    elements = {
        url: () => cy.visit("http://20.102.114.58/ghost/"),
        email: () => cy.xpath("//input[@type='email']"),
        password: () => cy.xpath("//input[@type='password']"),
        button: () => cy.xpath("//span[normalize-space()='Sign in']")
    }
}

module.export = new LoginPage()
