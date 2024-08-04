import Base from "./basePage"

const validationHomeLogin = '.login_logo'
const userName = '[data-test="username"]'
const userPassword = '[data-test="password"]'
const loginHome = '#login-button'
const mainScreenValidation = '.app_logo'
const accessingNotification = '.error-button'

export default class Home {

    acessarSite() {
        cy.visit('/')
        Base.verifyElementExist(validationHomeLogin)
    }
    typeUser(User, Password) {
        Base.typeValue(userName, User)
        Base.typeValue(userPassword, Password)
        Base.clickElement(loginHome)
    }
    homeValidation() {
        Base.verifyElementExist(mainScreenValidation)
    }
    acessNotification() {
        Base.verifyElementExist(accessingNotification)
    }
}

