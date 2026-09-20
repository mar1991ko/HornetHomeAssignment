import LoginPage from '../pages/Login/loginPage';
import InventoryPage from '../pages/Inventory/inventoryPage';
import HeaderPage from '../pages/header/headerPage';
import CartPage from '../pages/cart/cartPage';

describe('Cart', () => {
    beforeEach(() => {
        LoginPage.openLoginPage()
        LoginPage.fillCredentials()
    })

    it('Add Product to Cart', () => {
        InventoryPage.addProductToCart('Sauce Labs Backpack')
        const cartItems = 1;
        HeaderPage.verifyCartItems(cartItems)
        InventoryPage.veriyRemoveButtonIsVisible()
        HeaderPage.openCartPage()
        CartPage.validateCartProducts('Sauce Labs Backpack')
    })
})