export class NavMenu {

    SEARCH_BOX = '#suggestion-search'
    SEARCH_BTN = '#suggestion-search-button'
    MENU_BTN = '#imdbHeader-navDrawerOpen'
    MENU_OPTIONS = 'a[role="menuitem"]'

    searchFor(query) {
        cy.get(this.SEARCH_BOX).type(query)
        cy.get(this.SEARCH_BTN).click()
    }

    openMenu() {
        cy.get(this.MENU_BTN).click()
    }

    selectMenuOption(option) {
        cy.get(this.MENU_OPTIONS).contains(option).click()
    }

}

export const navMenu = new NavMenu()