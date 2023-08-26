
describe('Test imdb for Brite', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('Get Nicholas Cages most recent completed movie', () => {
      cy.get('#suggestion-search')
        .type('Nicolas Cage')
        .invoke('attr', 'value')
        .should('contain', 'Nicolas Cage')
      cy.get('#suggestion-search-button').click()
      cy.get('a').contains('Nicolas Cage').first().click()
      cy.contains('Upcoming').click()
      cy.contains('Completed').click({ force: true })
    })

    it('Rate second item top box office with 5 stars', () => {
      cy.contains('Menu').click()
      cy.contains('Top Box Office').click()
      cy.get('ul.ipc-metadata-list>li')
        .eq(1)
        .find('button[data-testid="rate-button"]')
        .click()
      cy.get('button[aria-label="Rate 5"]')
        .click({ force: true })
        .parents('.ipc-rating-prompt__rating-container')
        .find('button')
        .contains('Rate')
        .click()

    })

    it.only('Rate second item top box office with 5 stars', () => {
      cy.contains('Menu').click()
      cy.contains('Top 250 TV Shows').click()
      cy.contains('Breaking Bad').click()
      cy.get('[data-testid="photos-title"]').find('a.ipc-title-link-wrapper').click()
      cy.get('body').then(($body) => {
        if ($body.text().includes('Danny Trejo')) {
          cy.contains('a', 'Danny Trejo').click()
        } else {
          cy.get('[data-testid="mv-gallery-button"]').click()
          cy.contains('a', 'Danny Trejo').click()
        }
      })
      cy.get('#media_index_thumbnail_grid>a').eq(1).click()
    })


})