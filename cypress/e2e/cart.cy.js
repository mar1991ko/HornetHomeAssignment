import LoginPage from '../pages/Login/loginPage';
import InventoryPage from '../pages/Inventory/inventoryPage';
import HeaderPage from '../pages/header/headerPage';
import CartPage from '../pages/cart/cartPage';

describe('Cart', () => {
    beforeEach(() => {
        LoginPage.openLoginPage()        
    })

    it('Add Product to Cart', () => {
        LoginPage.fillStandardUserCredentials()
        InventoryPage.addProductToCart('Sauce Labs Backpack')
        const cartItems = 1;
        HeaderPage.verifyCartItems(cartItems)
        InventoryPage.verifyRemoveButtonIsVisible()
        HeaderPage.openCartPage()
        CartPage.validateCartProducts('Sauce Labs Backpack')
    })

    it('Add Fleece Jacket to Cart', () => {
        LoginPage.fillErrorUserCredentials()
        InventoryPage.addProductToCart('Sauce Labs Fleece Jacket')
        const cartItems = 1;
        HeaderPage.verifyCartItems(cartItems)
    })
})