describe('smoke.cy.js', () => {
  it('should visit', () => {
    cy.visit('/');
    cy.contains('Learn React');
  });
});
