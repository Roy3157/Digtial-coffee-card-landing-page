describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://127.0.0.1:5500/index.html')
    })
  
    it('check page title and subtitle', () => {
      // We use the `cy.get()` command to get all elements that match the selector.
      // Then, we use `should` to assert that there are two matched items,
      // which are the two default items.
      cy.get('#hero-title').should('have.text', 'xxxxxxxxxxx')
      cy.get('#hero-subTitle').should('have.text', 'xxxxxxxxxxxxx')  
    })
    it('check the page have two blog items', () => {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        cy.get('#blog-list > .carousel-item').should('have.length', 2)
        cy.get('#blog-list > .carousel-item').last().should('contain.text', 'Testimonial')
    })
    it('check if we can send the form', () => {
        cy.contains('Thank you for submitting the form').should('not.exist')

        cy.get('input[name=name]').type('Alex')
        cy.get('input[name=phoneNumber]').type('043299922')
        cy.get('input[name=email]').type('alex.li@asdfas.com')
        cy.get('textarea[name=message]').type('test message')
        cy.get('#btn-submit').click()

        //TDD Test driven development
        cy.contains('Thank you for submitting the form').should('exist')
 
    })
  })

  