import LoginPage from '../pages/Login/loginPage'
import InventoryPage from '../pages/Inventory/inventoryPage'

describe('Login', () => {
    beforeEach(() => {
        LoginPage.openLoginPage()
    })

    it('Login with Credentials', () => {
        LoginPage.fillCredentials()
        InventoryPage.validateInventoryPage()
    })

})