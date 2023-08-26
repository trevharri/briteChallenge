import { navMenu } from "../../support/page_objects/navMenu"
import { searchResultsPage } from "../../support/page_objects/searchResultsPage"
import { actorPage } from "../../support/page_objects/actorPage"
import { topBoxOfficePage } from "../../support/page_objects/topBoxOfficePage"
import { topTVShowsPage } from "../../support/page_objects/topTVShowsPage"
import { showPage } from "../../support/page_objects/showPage"
import { showGalleryPage } from "../../support/page_objects/showGalleryPage"

describe('Test imdb for Brite', () => {
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