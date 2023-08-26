export class ActorPage {

    goToFirstUpcomingCompletedMovie(){
        cy.get('[data-testid="accordion-item-actor-upcoming-projects"]').click()
        cy.get('#accordion-item-actor-upcoming-projects').contains('Completed').first().click({ force: true })
    }
}

export const actorPage = new ActorPage()