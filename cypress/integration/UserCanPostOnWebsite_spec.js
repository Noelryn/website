describe('vistor can see home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('shows users posts', () => {
    cy.contains('Post') .click() 
    cy.contains('Blog Page')
    cy.contains('Welcome')
  })
})