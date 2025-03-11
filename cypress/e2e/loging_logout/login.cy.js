import loginPage from "../../pages/loginPage"

describe("login test", () => {
    beforeEach(() =>{
        cy.visit("https://www.saucedemo.com/")
    })

    it("Should show error message", () =>{
        loginPage.enterCreds('standard', 'secret_sauce')
        loginPage.clickLoginBtn()
        loginPage.elements.error_box().should('be.visible')
        loginPage.elements.error_icon().should('be.visible')
        loginPage.elements.error_box().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        loginPage.clickErrorCloseBtn()
    })
    it("Should login", () =>{
        loginPage.enterCreds('standard_user', 'secret_sauce')
    })
})