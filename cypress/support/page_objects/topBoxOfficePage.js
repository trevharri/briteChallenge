export class TopBoxOfficePage {

    MOVIE_CARDS = 'ul.ipc-metadata-list>li'
    CARD_RATE_BTN = 'button[data-testid="rate-button"]'
    RATING_FORM = '.ipc-rating-prompt__rating-container'

    rateMovie( movieNumber, rating ) {
        cy.get(this.MOVIE_CARDS)
            .eq(movieNumber-1)
            .find(this.CARD_RATE_BTN)
            .click()
        cy.get(`button[aria-label="Rate ${rating}"]`)
            .click({ force: true })
            .parents(this.RATING_FORM)
            .find('button')
            .contains('Rate')
            .click()
    }

}

export const topBoxOfficePage = new TopBoxOfficePage()