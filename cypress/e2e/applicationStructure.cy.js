describe('Application', () => {
  it('is expected to display title', () => {
    cy.visit('/')
    cy.get('body').should('contain.text', 'GUSTEGÅRDEN')
  })
})