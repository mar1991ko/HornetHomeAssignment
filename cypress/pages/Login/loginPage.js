import { loginElements as el } from "./loginElements" 

class LoginPage {

    openLoginPage() {
        cy.visit("https://www.saucedemo.com/");
    }

    fillStandardUserCredentials() {
    cy.get(el.username).type('standard_user')
    cy.get(el.password).type('secret_sauce')
    cy.get(el.loginButton).click()
    }

    fillLockedUserCredentials() {
    cy.get(el.username).type('locked_user')
    cy.get(el.password).type('secret_sauce')
    cy.get(el.loginButton).click()
    }

    fillProblemUserCredentials() {
    cy.get(el.username).type('problem_user')
    cy.get(el.password).type('secret_sauce')
    cy.get(el.loginButton).click()
    }

    fillErrorUserCredentials() {
    cy.get(el.username).type('error_user')
    cy.get(el.password).type('secret_sauce')
    cy.get(el.loginButton).click()
    }

    validateLockedUserErrorMessage() {
    cy.get(el.errorMessage).should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    cy.url().should('eq', 'https://www.saucedemo.com/')
    }
}

export default new LoginPage();