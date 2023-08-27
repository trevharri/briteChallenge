export class ActorPage {

    UPCOMING_LABEL = '[data-testid="accordion-item-actor-upcoming-projects"]'
    UPCOMING_ACCORDION = '#accordion-item-actor-upcoming-projects'


    goToFirstUpcomingCompletedMovie(){
        cy.get(this.UPCOMING_LABEL).click()
        cy.get(this.UPCOMING_ACCORDION).contains('Completed').first().click({ force: true })
    }
}

export const actorPage = new ActorPage()