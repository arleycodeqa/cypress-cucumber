export default class Base {
    static verifyElementExist(element) {
        cy.get(element).should('be.visible')
    }
    static typeValuee(element, value) {
        cy.get(element).type(value)
    }
    static typeValueee(element, value) {
        cy.get(element).should('contain.text', value)
    }
    static clickElement(element) {
        cy.get(element).click()
    }
    static screenPage() {
        cy.url().should('include', '/inventory.html')
    }
    static viewIfContains(element, text) {
        cy.get(element).should('be.visible').and('have.text', text)
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