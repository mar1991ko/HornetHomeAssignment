import { headerElements as hel } from './headerElements';

class HeaderPage {

    verifyCartItems(quantity) {
        cy.get(hel.cartIcon).should('be.visible').and('have.text', quantity.toString());
    }

    openCartPage() {
        cy.get(hel.cartContainer).click();
    }
}

export default new HeaderPage();