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
}

module.exports = new checkoutPage();