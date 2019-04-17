/// <reference types="Cypress"/>

context('Example', () => {
  it('should example', () => {
    //cy.visit(Cypress.env('baseUrl'))
    cy.visit('http://localhost:4200')

    cy.contains('Login').click()

    cy.contains('New Recipe?').click()

    cy.get('#name').type('Tacos')
    cy.get('#cookTime').type('1h 20m')
    cy.get('#description').type('The food that changed my life!')

    cy.get('#ingredient-0').type('Taco Shells')
    cy.get('#addIngredient').click()
    cy.get('#ingredient-1').type('Meat')
    cy.get('#addIngredient').click()
    cy.get('#ingredient-2').type('Cheese')
    cy.get('#addIngredient').click()
    cy.get('#ingredient-3').type('Sauce')

    cy.get('#instructions-0').type('Cook Meat')
    cy.get('#addInstruction').click()
    cy.get('#instructions-1').type('Makes Tacos')
    cy.get('#addInstruction').click()
    cy.get('#instructions-2').type('Eat them')
    cy.get('#addInstruction').click()

    cy.get('#history').type('Long Ago')

    cy.contains('Add Recipe!').click()

    cy.contains('Tacos').click()

    cy.contains('Let\'s get cooking!').click()

  })
})
