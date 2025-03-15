class homePage{

    elements ={
        user_name : () => cy.get('[data-test="username"]'),
        password : () => cy.get('[data-test="password"]'),
        login_btn : () => cy.get('[data-test="login-button"]'),
        error_box : () => cy.get('.error-message-container'),
        error_text : () => cy.get('[data-test="error"]'),
        error_close : () => cy.get('[data-test="error-button"]'),
        error_icon : () => cy.get('[data-icon="times-circle"]')
    }

    enterUsername(username){
        this.elements.user_name().type(username)
    }
    enterPassword(pass){
        this.elements.password().type(pass)
    }
    enterCreds(username, pass){
        this.elements.user_name().type(username)
        this.elements.password().type(pass)
    }
    clickLoginBtn(){
        this.elements.login_btn().click()
    }
    clickErrorCloseBtn(){
        this.elements.error_close().click()
    }

}

module.exports = new homePage();