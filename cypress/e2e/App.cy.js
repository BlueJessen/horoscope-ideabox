describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })
  it('Should welcome user with their name', () => {
    cy.get('form').within(()=> {
      cy.get('input').type('Cece')
    })
    cy.get('header').contains('Cece')
  })

  it('Should should have a submit button', () => {
    cy.get('button')
  })

  it('User must have both fields filled to submit form', () => {
    cy.get('select').select('scorpio') //might need to go in form
    cy.get('button').click()
    cy.contains('Please fill out all fields')
    cy.get('.name-input').type('Cece')
    cy.get('button').click() //might need to go in form
  })

  it('Should change views to users horoscope when they click submit with appropriate information', () => {
    cy.get('select').select('scorpio') //might need to go in form
    cy.get('input').type('Cece')
    cy.get('button').click()
    cy.get('.horoscope-container').within(()=> {
      cy.contains('Cece')
      cy.contains('scorpio')
    })
  })

  it('Should change views to homepage when click the get another Horoscope button', () => {
    cy.get('select').select('scorpio') //might need to go in form
    cy.get('input').type('Cece')
    cy.get('button').click()
    cy.contains('lucky number')
    cy.get('button').click()
    cy.get('form')
    })
})
