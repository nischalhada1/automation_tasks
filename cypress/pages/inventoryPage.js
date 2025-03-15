class invPage{

    elements ={
        ham_menu : () => cy.get('#react-burger-menu-btn'),
        logout_btn : () => cy.get('[data-test="logout-sidebar-link"]'),
        all_item_btn : () => cy.get('[data-test="inventory-sidebar-link"]'),
        ham_menu_close_btn : () => cy.get('#react-burger-cross-btn'),
        cart_btn : () => cy.get('[data-test="shopping-cart-link"]'),
        cart_badge : () => cy.get('[data-test="shopping-cart-badge"]'),
        sort_dropdowm : () => cy.get('[data-test="product-sort-container"]'),
        first_list_item : () => cy.get('[data-test="inventory-list"] > :nth-child(1)'),
        all_add_to_card_btn : () => cy.get('.btn.btn_inventory'),
        all_item_price : () => cy.get('[data-test="inventory-item-price"]'),
        back_pack_add_cart_btn : () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        back_pack_remove_cart_btn : () => cy.get('[data-test="remove-sauce-labs-backpack"]')
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

    addFirstItemToCart(){
        this.elements.all_add_to_card_btn().eq(0).click()
    }
    clickCartBtnBackpack(){
        this.elements.back_pack_add_cart_btn().click()
    }
    clickRemoveBtnBackpack(){
        this.elements.back_pack_remove_cart_btn().click()
    }
    clickCartBtn(){
        this.elements.cart_btn().click()
    }

}

module.exports = new invPage();