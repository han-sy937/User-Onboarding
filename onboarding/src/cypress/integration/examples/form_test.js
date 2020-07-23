describe('Inputs', () => {

    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it("can type in a name", () => {
        cy.get('input[name="name"]')
        .type('Hanina Syed')
        .should('have.value', "Hanina Syed")
    })

    it("can type in an email", () => {
        cy.get('input[name="email"]')
        .type('hanina_syed@yahoo.com')
        .should('have.value', "hanina_syed@yahoo.com")
    })

    it("can type in a password", () => {
        cy.get('input[name="password"]')
        .type('lambda1234')
        .should('have.value', "lambda1234")
    })

    it("checkbox checked", () => {
        cy.get('[type="checkbox"]').check()
    })

    it("can submit data", () => {
        cy.get('input[name="name"]')
        cy.get('input[name="email"]')
        cy.get('input[name="password"]')
        cy.get('[type="checkbox"]').check()
        cy.get('button').click()
        cy.get('.user').contains("Hanina Syed")

    })

    
})

describe('Form validation', () => {
    it('returns form errors', () => {
        cy.visit('http://localhost:3000')
        cy.get('input[name="email"]')
        .type('jshfds')
        cy.contains('The email must be a valid email address')
    })
})