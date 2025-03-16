import invPage from "../../pages/inventoryPage"
import cartPage from "../../pages/cartPag"
import checkoutPage from "../../pages/checkoutPage"

describe("login test", () => {
    before(() =>{
        cy.visit("https://www.saucedemo.com/")
        cy.login('standard_user', 'secret_sauce')
    })
    
    it('Should checkout the item', () => {
        invPage.addItemToCart()
        invPage.clickCartBtn()
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
        
        checkoutPage.checkoutItem()
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')

        checkoutPage.completeCheckoutProcess()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })
})
