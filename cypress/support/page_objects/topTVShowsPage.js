export class TopTVShowsPage {

    goToShowPage(show) {
        cy.get('[data-testid="chart-layout-main-column"]').contains(show).click()
    }

}

export const topTVShowsPage = new TopTVShowsPage()
