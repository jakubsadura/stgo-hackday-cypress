describe('My First Test', function() {
  it('Visits the STGO test env and search for master branch build', function() {
    cy.visit('https://ba.orange.saxobank.com/')
      .url()
        .should('include', '/bundles')
      .get('input[type="search"]')
        .click()
        .type('master')        
      .get('tbody tr:first-child a')
  })
})