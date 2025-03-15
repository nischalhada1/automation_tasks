import invPage from "../../pages/inventoryPage"

describe("login test", () => {
    beforeEach(() =>{
        cy.visit("https://www.saucedemo.com/")
        cy.login('standard_user', 'secret_sauce')
    })

    it("Should be able to click hamburger menu", () => {
        invPage.elements.ham_menu().should('be.visible')
        invPage.clickHamMenu()
        invPage.elements.logout_btn().should('be.visible')
    })
    it("Should logout successfully ", () =>{
        invPage.clickHamMenu()
        invPage.clickLogoutBtn()
        cy.url().should('eq', 'https://www.saucedemo.com/')
    })
})