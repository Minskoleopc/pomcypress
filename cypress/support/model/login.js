///<reference types="cypress"/>

export let LOGINELEMENTS = {
    userName:"#txtUsername",
    password:"#txtPassword",
    loginButton:"#btnLogin",
    forgotPasswordLink:"#forgotPasswordLink",
    logo:"#divLogo"
}

export function login(userName,password){
    cy.get(LOGINELEMENTS.userName).type(userName)
    cy.get(LOGINELEMENTS.password).type(password)
    cy.get(LOGINELEMENTS.loginButton).click()
}

export function verifyLogoVisible(){
    cy.get(LOGINELEMENTS.logo).should('be.visible')
}

export function verifyForgotPasswordLink(){
    cy.get(LOGINELEMENTS.forgotPasswordLink).should('be.visible')
}

function verifyLoginPage(){
    cy.url().should('contain','https://opensource-demo.orangehrmlive.com/')
}