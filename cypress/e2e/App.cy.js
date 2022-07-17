describe('empty spec', () => {
  it('Should welcome user with their name', () => {
    cy.visit('localhost:3000')
    cy.get('form').within(()=> {
      cy.get('.name-input').type('Cece')
    })
    cy.get('header').contains('Cece')
  })

  it('Should should have a submit button', () => {
    cy.get('button')
  })

  it('User must have both fields filled to submit form', () => {
    
  })

  it('Should change views to users horoscope when they click submit with appropriate information', () => {

  })
})
