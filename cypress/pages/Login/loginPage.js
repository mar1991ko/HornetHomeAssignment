import { loginElements as el } from "./loginElements" 

class LoginPage {

    openLoginPage() {
        cy.visit("https://www.saucedemo.com/");
    }

    fillCredentials() {
    cy.get(el.username).type('standard_user')
    cy.get(el.password).type('secret_sauce')
    cy.get(el.loginButton).click()
    }
}

export default new LoginPage();