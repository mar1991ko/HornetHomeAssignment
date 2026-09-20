import { inventoryElements as iel} from './inventoryElements';

class InventoryPage {

    validateInventoryPage() {
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    }

    addProductToCart(itemName) {
        cy.get(iel.addToCart(itemName)).click();
    }

    veriyRemoveButtonIsVisible() {
        cy.get(iel.addToCart).should('be.visible').and('have.text', 'Remove');
    }
}

export default new InventoryPage();