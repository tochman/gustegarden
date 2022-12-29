describe("Application", () => {
  beforeEach(() => {
    cy.acceptAllGDPR();
    cy.visit("/");
  });
  it("is expected to display application header", () => {
    cy.getElement("title").should("contain.text", "Småskaligt - djur och människor i balans");
  });

  it("is expected to display the page title", () => {
    cy.title().should("eql", "Gustegården - Småskalig jordbruk");
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
