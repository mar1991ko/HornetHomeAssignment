import { loginElements as el } from "./loginElements" 
import credentials from "../../../credentials.json"

class LoginPage {

    openLoginPage() {
        cy.visit("https://www.saucedemo.com/");
    }

    fillStandardUserCredentials() {
    cy.get(el.username).type(credentials.standardUser)
    cy.get(el.password).type((credentials.password),{log: false})
    cy.get(el.loginButton).click()
    }

    fillLockedUserCredentials() {
    cy.get(el.username).type(credentials.lockedUser)
    cy.get(el.password).type((credentials.password),{log: false})
    cy.get(el.loginButton).click()
    }

    fillProblemUserCredentials() {
    cy.get(el.username).type(credentials.problemUser)
    cy.get(el.password).type((credentials.password),{log: false})
    cy.get(el.loginButton).click()
    }

    fillErrorUserCredentials() {
    cy.get(el.username).type(credentials.errorUser)
    cy.get(el.password).type((credentials.password),{log: false})
    cy.get(el.loginButton).click()
    }

    validateLockedUserErrorMessage() {
    cy.get(el.errorMessage).should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    cy.url().should('eq', 'https://www.saucedemo.com/')
    }
}

export default new LoginPage();