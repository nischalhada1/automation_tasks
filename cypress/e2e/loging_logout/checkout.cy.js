import invPage from "../../pages/inventoryPage"
import cartPage from "../../pages/cartPag"
import checkoutPage from "../../pages/checkoutPage"

describe("login test", () => {
    before(() =>{
        cy.visit("https://www.saucedemo.com/")
        cy.login('standard_user', 'secret_sauce')
    })
    
    it.only('Should checkout the item', () => {
        invPage.elements.back_pack_add_cart_btn().should('have.text', 'Add to cart')
        invPage.clickCartBtnBackpack()
        invPage.elements.back_pack_remove_cart_btn().should('have.text', 'Remove')
        invPage.elements.cart_badge().should('be.visible')
        invPage.clickCartBtn()
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
        cartPage.elements.page_title().should('have.text', 'Your Cart')
        cartPage.elements.inv_item().should('be.visible')
        cartPage.clickCheckoutBtn()
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
        checkoutPage.elements.page_title().should('have.text', 'Checkout: Your Information')
        checkoutPage.enterFirstName('Demo')
        checkoutPage.enterLastName('user')
        checkoutPage.enterPostalCode('123456')
        checkoutPage.clickContinueBtn()
        checkoutPage.elements.page_title().should('have.text', 'Checkout: Overview')
        checkoutPage.clickFinishBtn()
        checkoutPage.elements.page_title().should('have.text', 'Checkout: Complete!')
        checkoutPage.elements.title_header().should('have.text', 'Thank you for your order!')
        checkoutPage.clickBackToProductBtn()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })
})
