class invPage{

    elements ={
        ham_menu : () => cy.get('#react-burger-menu-btn'),
        logout_btn : () => cy.get('[data-test="logout-sidebar-link"]'),
        all_item_btn : () => cy.get('[data-test="inventory-sidebar-link"]'),
        ham_menu_close_btn : () => cy.get('#react-burger-cross-btn'),
        cart_btn : () => cy.get('[data-test="shopping-cart-link"]'),
        sort_dropdowm : () => cy.get('[data-test="product-sort-container"]'),
        first_list_item : () => cy.get('[data-test="inventory-list"] > :nth-child(1)')
    }

    clickHamMenu(){
        this.elements.ham_menu().click()
    }
    clickHamMenuCloseBtn(){
        this.elements.ham_menu_close_btn().click()
    }
    clickLogoutBtn(){
        this.elements.logout_btn().click()
    }

}

module.exports = new invPage();