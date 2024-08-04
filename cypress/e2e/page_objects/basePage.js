export default class Base {
    static verifyElementExist(element) {
        cy.get(element).should('be.visible')
    }
    static typeValuee(element, value) {
        cy.get(element).type(value)
    }
    static typeValueee(element, value) {
        cy.get(element).type(value)
    }
    static clickElement(element) {
        cy.get(element).click()
    }


    static typeValue(element, value) {
        if (value === "") {
            cy.get(element)
        }
        else {
            cy.get(element).type(value)
        }
    }
}