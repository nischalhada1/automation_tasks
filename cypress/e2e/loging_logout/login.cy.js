import loginPage from "../../pages/loginPage"

describe("login test", () => {
    beforeEach(() =>{
        cy.visit("https://www.saucedemo.com/")
    })

    it("Should show error message empty creds", () =>{
        loginPage.clickLoginBtn()
        loginPage.elements.error_box().should('be.visible')
        loginPage.elements.error_icon().should('be.visible')
        loginPage.elements.error_box().should('have.text', 'Epic sadface: Username is required')
        loginPage.clickErrorCloseBtn()
    })    

    it("Should show error message for empty username", () =>{
        loginPage.enterPassword('secret_sauce')
        loginPage.clickLoginBtn()
        loginPage.elements.error_box().should('be.visible')
        loginPage.elements.error_icon().should('be.visible')
        loginPage.elements.error_box().should('have.text', 'Epic sadface: Username is required')
        loginPage.clickErrorCloseBtn()
    })

    it("Should show error message for empty password", () =>{
        loginPage.enterUsername('standard')
        loginPage.clickLoginBtn()
        loginPage.elements.error_box().should('be.visible')
        loginPage.elements.error_icon().should('be.visible')
        loginPage.elements.error_box().should('have.text', 'Epic sadface: Password is required')
        loginPage.clickErrorCloseBtn()
    })

    it("Should show error message for invalida creds", () =>{
        loginPage.enterCreds('standard', 'secret_sauce')
        loginPage.clickLoginBtn()
        loginPage.elements.error_box().should('be.visible')
        loginPage.elements.error_icon().should('be.visible')
        loginPage.elements.error_box().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        loginPage.clickErrorCloseBtn()
    })

    it("Should login successfully", () =>{
        loginPage.enterCreds('standard_user', 'secret_sauce')
        loginPage.clickLoginBtn()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    })
})