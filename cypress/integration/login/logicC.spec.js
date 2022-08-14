///<reference types="cypress"/>
import loginC from "../../support/model/loginC"
import * as dashboard from "../../support/model/dashboard"

describe('verify the Orange HRM login form', function () {
    
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })

    it('verify the login functionality', function () {
        let login = new loginC()
        login.login('Admin', 'admin123')
        dashboard.verifyDashboardPageUrl()

    })

    it('verify the logo on login form', function () {
        login.verifyLogoVisible()
    })

    it('verify the forgot password link', function () {
        login.verifyForgotPasswordLink()
    })

    it('verify url on login page', function () {
        login.verifyLoginPageUrl()
    })




})