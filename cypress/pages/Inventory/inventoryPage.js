import { inventoryElements as iel} from './inventoryElements';

class InventoryPage {

    validateInventoryPage() {
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    }

    addProductToCart(itemName) {
        cy.get(iel.addToCart(itemName)).click();
    }

    verifyRemoveButtonIsVisible() {
        cy.get(iel.removeButton).should('be.visible').and('have.text', 'Remove');
    }

    getOnesieImage() {
        return cy.get(iel.onesieImage);
    }
}

export default new InventoryPage();