
describe('Test imdb for Brite', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('/')
      })

      it.only('Get Nicholas Cage most recent completed movie', () => {
        cy.get('#suggestion-search').type('Nicolas Cage').invoke('attr', 'placeholder').should('contain', 'Search IMDb')
        cy.get('#suggestion-search-button').click()
        cy.get('a').contains('Nicolas Cage').first().click()
        cy.contains('Upcoming').click()
        cy.contains('Completed').click({ force: true })
      })

      it('Rate second item top box office with 5 stars', () => {
        cy.contains('Menu').click()
        cy.contains('Top Box Office').click()
        cy.get('ul.ipc-metadata-list>li').eq(1).find('button[data-testid="rate-button"]').click()
        cy.get('button[aria-label="Rate 5"]')
          .click({ force: true })
          .parents('.ipc-rating-prompt__rating-container')
          .find('button')
          .contains('Rate')
          .click()

      })

      it('Rate second item top box office with 5 stars', () => {
        cy.contains('Menu').click()
        cy.contains('Top 250 TV Shows').click()
        cy.contains('Breaking Bad').click()
        cy.contains('h3','Photos').click()
        cy.contains('a', 'Danny Trejo').click()
        cy.get('#media_index_thumbnail_grid>a').eq(1).click()
      })


})