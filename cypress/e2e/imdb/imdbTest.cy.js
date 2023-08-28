import { navMenu, searchResultsPage, actorPage, topBoxOfficePage, topTVShowsPage, showPage, showGalleryPage } from "../../support/page_objects/index"

describe('Test IMDb for Brite', () => {

    beforeEach(() => {
        cy.visit('/')
      })

    it('Navigate to Nicholas Cages most recently completed upcoming movie', () => {
      navMenu.searchFor('Nicolas Cage')
      cy.get(searchResultsPage.PEOPLE_RESULTS).should('contain', 'Nicolas Cage')
      searchResultsPage.goToActorPage('Nicolas Cage')

      cy.get(actorPage.UPCOMING_MOVIES_ACCORDION)
        .contains('Completed')
        .should('have.length.least', 1)
      actorPage.goToFirstUpcomingCompletedMovie()
      cy.url().should('contain', 'title')
    })

    it('Give a 5 star rating to the second movie in Top Box Office list', () => {
      navMenu.openMenu()
      cy.get(navMenu.MENU_OPTIONS).should('contain', 'Top Box Office')
      navMenu.selectMenuOption('Top Box Office')

      cy.get(topBoxOfficePage.MOVIE_CARDS).should('have.length.least', 2)
      topBoxOfficePage.rateMovie(2, 5)
      cy.url().should('contain', 'registration/signin')
    })

    it('Navigate to the second image of Danny Trejo in Breaking Bad show gallery', () => {
      navMenu.openMenu()
      cy.get(navMenu.MENU_OPTIONS).should('contain', 'Top 250 TV Shows')
      navMenu.selectMenuOption('Top 250 TV Shows')

      cy.get(topTVShowsPage.SHOW_TITLE_LINKS).should('contain', 'Breaking Bad')
      topTVShowsPage.goToShowPage('Breaking Bad')
      showPage.goToPhotoGallery()

      cy.get(showGalleryPage.PHOTO_NAME_FILTERS).should('contain', 'Danny Trejo')
      showGalleryPage.filterPhotosByName('Danny Trejo')
      cy.get(showGalleryPage.GRID_PHOTOS).should('have.length.least', 2)
      showGalleryPage.selectNthPhoto(2)
      cy.url().should('contain', 'mediaviewer')
    })

})