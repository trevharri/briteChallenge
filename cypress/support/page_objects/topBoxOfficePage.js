export class TopBoxOfficePage {

    rateMovie( movieNumber, rating ) {
        cy.get('ul.ipc-metadata-list>li')
            .eq(movieNumber-1)
            .find('button[data-testid="rate-button"]')
            .click()
        cy.get(`button[aria-label="Rate ${rating}"]`)
            .click({ force: true })
            .parents('.ipc-rating-prompt__rating-container')
            .find('button')
            .contains('Rate')
            .click()
    }

}

export const topBoxOfficePage = new TopBoxOfficePage()