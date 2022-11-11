class LoginPage {
    constructor () {
        this.url = "http://20.102.114.58/ghost/"
        this.email = "//input[@type='email']"
        this.password = "//input[@type='password']"
        this.button = "//span[normalize-space()='Sign in']"
    }

    login = (email, password) => {
        cy.visit(this.url)
        cy.xpath(this.email).type(email)
        cy.xpath(this.password).type(password)
        cy.xpath(this.button).click()
    }
}

export default LoginPage
