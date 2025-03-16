class checkoutPage{

    elements ={
        page_title: () => cy.get('[data-test="title"]'),
        first_name : () => cy.get('[data-test="firstName"]'),
        last_name : () => cy.get('[data-test="lastName"]'),
        postal_code : () => cy.get('[data-test="postalCode"]'),
        continue_btn : () => cy.get('[data-test="continue"]'),
        finish_btn : () => cy.get('[data-test="finish"]'),
        cancel_btn : () => cy.get('[data-test="cancel"]'),
        title_header : () => cy.get('[data-test="complete-header"]'),
        back_to_produce_btn : () => cy.get('[data-test="back-to-products"]'),
        inv_item : () => cy.get('[data-test="inventory-item"]'),
        checkout_btn : () => cy.get('[data-test="checkout"]'),
    }

    enterFirstName(fname){
        this.elements.first_name().type(fname)
    }
    enterLastName(lname){
        this.elements.last_name().type(lname)
    }
    enterPostalCode(pcode){
        this.elements.postal_code().type(pcode)
    }
    clickContinueBtn(){
        this.elements.continue_btn().click()
    }
    clickFinishBtn(){
        this.elements.finish_btn().click()
    }
    clickBackToProductBtn(){
        this.elements.back_to_produce_btn().click()
    }
    checkoutItem(){
        this.elements.page_title().should('have.text', 'Your Cart')
        this.elements.inv_item().should('be.visible')
        this.elements.checkout_btn().click()
    }
    completeCheckoutProcess(){
        this.elements.page_title().should('have.text', 'Checkout: Your Information')
        this.elements.page_title().should('have.text', 'Checkout: Your Information')
        this.enterFirstName('Demo')
        this.enterLastName('user')
        this.enterPostalCode('123456')
        this.clickContinueBtn()
        this.elements.page_title().should('have.text', 'Checkout: Overview')
        this.clickFinishBtn()
        this.elements.page_title().should('have.text', 'Checkout: Complete!')
        this.elements.title_header().should('have.text', 'Thank you for your order!')
        this.clickBackToProductBtn()
    }
}

module.exports = new checkoutPage();