import LoginPage from '../pages/Login/loginPage'
import InventoryPage from '../pages/Inventory/inventoryPage'

describe('Login', () => {
    beforeEach(() => {
        LoginPage.openLoginPage()
    })

    it('Login with Standard User Credentials', () => {
        LoginPage.fillStandardUserCredentials(),{log: false}
        InventoryPage.validateInventoryPage()
    })

    it('Login with Locked User Credentials', () => {
        LoginPage.fillLockedUserCredentials()
        LoginPage.validateLockedUserErrorMessage()
    })

        it('Check Onesie Image', () => {
            LoginPage.fillProblemUserCredentials()
            expect(InventoryPage.getOnesieImage()).to.exist
        })

})