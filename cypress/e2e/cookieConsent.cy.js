describe('Cookie Consent', () => {
  beforeEach(() => {
    // cy.viewport('iphone-x')
    cy.rejectAllGDPR()
    cy.visit('/')
  });
  it('is expected to display cookie alert', () => {
    cy.getElement('cookie-banner').should('be.visible')
  });
});