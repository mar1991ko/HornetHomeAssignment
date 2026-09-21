import LoginPage from '../pages/Login/loginPage'
import InventoryPage from '../pages/Inventory/inventoryPage'

describe('Login', () => {
    beforeEach(() => {
        LoginPage.openLoginPage()
    })

    it('Login with Standard User Credentials', () => {
        LoginPage.fillStandardUserCredentials()
        InventoryPage.validateInventoryPage()
    })

    it('Login with Locked User Credentials', () => {
        LoginPage.fillLockedUserCredentials()
        LoginPage.validateLockedUserErrorMessage()
    })

})