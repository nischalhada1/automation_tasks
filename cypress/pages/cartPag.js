class cartPage{

    elements ={
        page_title: () => cy.get('[data-test="title"]'),
        checkout_btn : () => cy.get('[data-test="checkout"]'),
        inv_item : () => cy.get('[data-test="inventory-item"]'),
        continue_shop_btn : () => cy.get('[data-test="continue-shopping"]')
    }

    clickCheckoutBtn(){
        this.elements.checkout_btn().click()
    }
    clickContinueShoppingBtn(){
        this.elements.continue_shop_btn().click()
    }
}

module.exports = new cartPage();