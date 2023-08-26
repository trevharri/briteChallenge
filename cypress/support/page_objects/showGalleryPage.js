export class ShowGalleryPage {

    filterPhotosByName(name) {
        cy.get('#media_index_name_filters')
            .contains(name)
            .click()
    }

    selectNthPhoto(n) {
        cy.get('#media_index_thumbnail_grid>a').eq(n-1).click()
    }
}

export const showGalleryPage = new ShowGalleryPage()