// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("autoAuthenticate", (email, password) => {
  cy.clearCookies()
  cy.setCookie('Auth', 'AuthToken')
  //   cy.request({
  //     method: 'POST',
  //     url: Cypress.env("baseUrl") + 'api/users/login',
  //     body: {
  //       email: email,
  //       password: password,
  //       remember: false
  //     }
  //   }).then((loginResponse) => {
  //     var encodedAuthToken = encodeURIComponent(btoa(JSON.stringify({
  //       'id': loginResponse.body.id
  //     })))
  //    cy.setCookie('u', encodedAuthToken)
  //   })
})
