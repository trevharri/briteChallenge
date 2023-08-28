export class ActorPage {

    UPCOMING_MOVIES_LABEL = '[data-testid="accordion-item-actor-upcoming-projects"]'
    UPCOMING_MOVIES_ACCORDION = '#accordion-item-actor-upcoming-projects'

    goToFirstUpcomingCompletedMovie(){
        cy.get(this.UPCOMING_MOVIES_LABEL).click()
        cy.get(this.UPCOMING_MOVIES_ACCORDION)
            .contains('Completed')
            .first()
            .click({ force: true })
    }

}

export const actorPage = new ActorPage()