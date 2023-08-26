export class SearchResultsPage {

    goToActorPage(actor) {
        cy.get('[data-testid="find-results-section-name"]')
            .contains(actor)
            .first()
            .click()
    }

}

export const searchResultsPage = new SearchResultsPage()