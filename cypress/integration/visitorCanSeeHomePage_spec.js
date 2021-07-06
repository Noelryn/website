describe('vistor can see home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('user can see Nav Bar', () => {
    cy.contains('Home Page!')
    cy.contains('About') .click() 
    cy.contains('About Page!')
    cy.contains('Post') .click() 
    cy.contains('Post Page!')
    cy.contains('Projects') .click() 
    cy.contains('Project Page!')
  })

  it('has social media icon links', () => {
    cy.contains('linkedin-icon').click()
    cy.contains('Noel Ryan')
  })



  
  


})