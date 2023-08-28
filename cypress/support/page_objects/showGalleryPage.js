export class ShowGalleryPage {

    PHOTO_NAME_FILTERS = '#media_index_name_filters a'
    GRID_PHOTOS = '#media_index_thumbnail_grid>a'

    filterPhotosByName(name) {
        cy.get(this.PHOTO_NAME_FILTERS)
            .contains(name)
            .click()
    }

    selectNthPhoto(n) {
        cy.get(this.GRID_PHOTOS).eq(n-1).click()
    }

}

export const showGalleryPage = new ShowGalleryPage()