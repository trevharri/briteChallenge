export class NavMenu {

    searchFor(query) {
        cy.get('#suggestion-search')
            .type(query)
            .invoke('attr', 'value')
            .should('contain', query)
        cy.get('#suggestion-search-button').click()
    }

    openMenu() {
        cy.get('#imdbHeader-navDrawerOpen').click()
    }

    selectMenuOption(option) {
        cy.get('a[role="menuitem"]').contains(option).click()
    }
}

export const navMenu = new NavMenu()