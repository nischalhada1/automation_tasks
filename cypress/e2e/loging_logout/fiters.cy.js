import invPage from "../../pages/inventoryPage"

describe("login test", () => {
    beforeEach(() =>{
        cy.visit("https://www.saucedemo.com/")
        cy.login('standard_user', 'secret_sauce')
    })

    it("Should filter A to Z", () => {
        invPage.elements.sort_dropdowm().select('az')
        invPage.elements.first_list_item_title().should('have.text', 'Sauce Labs Backpack')
        invPage.elements.last_list_item_title().should('have.text', 'Test.allTheThings() T-Shirt (Red)')
    })
    it("Should filter Z to A", () =>{
        invPage.elements.sort_dropdowm().select('za')
        invPage.elements.first_list_item_title().should('have.text', 'Test.allTheThings() T-Shirt (Red)')
        invPage.elements.last_list_item_title().should('have.text', 'Sauce Labs Backpack')
    })
    it("Should filter low to high price", () =>{
        invPage.elements.sort_dropdowm().select('lohi')
        invPage.elements.first_list_item_price().should('have.text', '$7.99')
        invPage.elements.last_list_item_price().should('have.text', '$49.99')
    })
    it("Should filter high to low price", () =>{
        invPage.elements.sort_dropdowm().select('hilo')
        invPage.elements.first_list_item_price().should('have.text', '$49.99')
        invPage.elements.last_list_item_price().should('have.text', '$7.99')
    })
})