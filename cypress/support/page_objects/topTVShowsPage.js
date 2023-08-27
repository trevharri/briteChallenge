export class TopTVShowsPage {

    SHOW_TITLE_LINKS = 'div.cli-title>a.ipc-title-link-wrapper'

    goToShowPage(show) {
        cy.get(this.SHOW_TITLE_LINKS).contains(show).click()
    }

}

export const topTVShowsPage = new TopTVShowsPage()
