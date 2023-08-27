export class SearchResultsPage {

    PEOPLE_RESULTS = '.find-name-result'

    goToActorPage(actor) {
        cy.get(this.PEOPLE_RESULTS)
            .contains(actor)
            .first()
            .click()
    }

}

export const searchResultsPage = new SearchResultsPage()