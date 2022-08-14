



class Login {

    LOGINELEMENTS = {
        userName: "#txtUsername",
        password: "#txtPassword",
        loginButton: "#btnLogin",
        forgotPasswordLink: "#forgotPasswordLink",
        logo: "#divLogo"
    }

    login(userName, password) {
        cy.get(LOGINELEMENTS.userName).type(userName)
        cy.get(LOGINELEMENTS.password).type(password)
        cy.get(LOGINELEMENTS.loginButton).click()
    }

    verifyLogoVisible() {
        cy.get(LOGINELEMENTS.logo).should('be.visible')
    }

    verifyForgotPasswordLink() {
        cy.get(LOGINELEMENTS.forgotPasswordLink).should('be.visible')
    }

    verifyLoginPageUrl() {
        cy.url().should('contain', 'https://opensource-demo.orangehrmlive.com/')
    }
    // api 

}

let login = new Login
export default login