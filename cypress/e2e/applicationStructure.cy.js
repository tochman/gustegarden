describe("Application", () => {
  beforeEach(() => {
    cy.rejectAllGDPR();
    cy.visit("/");
  });
  it.only("is expected to display application title", () => {
    cy.getElement("title").should("contain.text", "GUSTEGÅRDEN");
  });

  describe("header section", () => {
    it("is expected to exist", () => {
      cy.getElement("header").should("be.visible");
    });
  });

  describe("footer section", () => {
    it("is expected to exist", () => {
      cy.getElement("footer").should("be.visible");
    });
  });
});
