import './cookieCommands'

Cypress.Commands.add("getElement", (identifier) => {
  cy.get(`[data-cy=${identifier}]`);
});