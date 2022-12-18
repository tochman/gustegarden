# Basic UI structure

I want to get the application heade and footer in palce before we move on and get the application content in place. Again, the main goal at this point is to get a fairly static page deployed, before I start adding dynamic content. 

In my test file, I add two fairly simple tests. 

```js
describe("Application", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("is expected to display application title", () => {
    cy.getElement('title').should("contain.text", "GUSTEGÅRDEN");
  });

  describe('header section', () => {
    it('is expected to exist', () => {
      cy.getElement('header').should('be.visible')
    });
  });

  describe('footer section', () => {
    it('is expected to exist', () => {
      cy.getElement('footer').should('be.visible')
    });
  });
});
```

The `cy.getElement()` command is my own. I add it to Cypress by defining in in `cypress/support/commands.js`. 

```js 
Cypress.Commands.add("getElement", (identifier) => {
  cy.get(`[data-cy=${identifier}]`);
});
```