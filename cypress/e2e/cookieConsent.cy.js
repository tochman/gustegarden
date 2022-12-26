describe('Cookie Consent', () => {
  beforeEach(() => {
    cy.rejectAllGDPR()
    cy.visit('/')
  });
  it('is expected to display cookie alert', () => {
    cy.getElement('cookie-banner').should('be.visible')
  });
});