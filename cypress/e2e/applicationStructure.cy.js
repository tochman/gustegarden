describe("Application", () => {
  before(() => {
    cy.visit("/");
  });
  it("is expected to display title", () => {
    cy.getElement('title').should("contain.text", "GUSTEGÅRDEN");
  });
});
