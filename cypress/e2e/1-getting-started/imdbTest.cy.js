import { navMenu, searchResultsPage, actorPage, topBoxOfficePage, topTVShowsPage, showPage, showGalleryPage } from "../../support/page_objects/index"

describe('Test IMDb for Brite', () => {

    beforeEach(() => {
        cy.visit('/')
      })

    it('Get Nicholas Cages most recent completed movie', () => {
      navMenu.searchFor('Nicolas Cage')
      searchResultsPage.goToActorPage('Nicolas Cage')
      actorPage.goToFirstUpcomingCompletedMovie()
    })

    it('Rate second item top box office with 5 stars', () => {
      navMenu.openMenu()
      navMenu.selectMenuOption('Top Box Office')
      topBoxOfficePage.rateMovie(2, 5)
    })

    it('Get second image of Danny Trejo in Breaking Bad gallery', () => {
      navMenu.openMenu()
      navMenu.selectMenuOption('Top 250 TV Shows')
      topTVShowsPage.goToShowPage('Breaking Bad')
      showPage.goToPhotoGallery()
      showGalleryPage.filterPhotosByName('Danny Trejo')
      showGalleryPage.selectNthPhoto(2)
    })

})