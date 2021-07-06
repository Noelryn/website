describe('vistor can see home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has h1 Home Page', () => {
    cy.contains('Home Page!')
  })
  


})