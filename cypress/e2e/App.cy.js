describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })
  it('Should welcome user with their name', () => {
    cy.get('form').within(()=> {
      cy.get('.name-input').type('Cece')
    })
    cy.get('header').contains('Cece')
  })

  it('Should should have a submit button', () => {
    cy.get('button')
  })

  it('User must have both fields filled to submit form', () => {
    cy.get('input[name^= ‘zodiac-’]').select('scorpio') //might need to go in form
    cy.get('.submit-button').click()
    cy.get('.error-message')
    cy.get('.name-input').type('Cece')
    cy.get('.submit-button').click() //might need to go in form
  })

  it('Should change views to users horoscope when they click submit with appropriate information', () => {
    cy.get('input[name^= ‘zodiac-’]').select('scorpio') //might need to go in form
    cy.get('.name-input').type('Cece')
    cy.get('.submit-button').click()
    cy.get('.horoscope-container').within(()=> {
      cy.get('h1').contains('Cece')
      cy.get('h1').contains('scorpio')
    })
  })
})
