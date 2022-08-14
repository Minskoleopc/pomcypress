///<reference types="cypress"/>
import * as login from "../../support/model/login.js"
import * as dashboard from "../../support/model/dashboard"
describe('verify the Orange HRM login form',function(){

    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
    })

    it('verify the login functionality',function(){
        login.login('Admin','admin123')
        dashboard.verifyDashboardPageUrl()

    })

    it('verify the logo on login form',function(){
        login.verifyLogoVisible()
    })

    it('verify the forgot password link',function(){
        login.verifyForgotPasswordLink()
    })

    it('verify url on login page',function(){
        login.verifyLoginPageUrl()
    })




})