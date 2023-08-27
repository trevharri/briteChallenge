export class ShowPage {

    PHOTOS_LINK = '[data-testid="photos-title"] a'

    goToPhotoGallery(){
        cy.get(this.PHOTOS_LINK).click()
        cy.url().then( url => {
            if (url.includes('mediaviewer')){
                cy.get('[data-testid="mv-gallery-button"]').click()
            }
        })
    }

}

export const showPage = new ShowPage()