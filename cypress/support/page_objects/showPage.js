export class ShowPage {

    goToPhotoGallery(){
        cy.get('[data-testid="photos-title"]').find('a.ipc-title-link-wrapper').click()
        cy.url().then( url => {
            if (url.includes('mediaviewer')){
                cy.get('[data-testid="mv-gallery-button"]').click()
            }
        })
    }

}

export const showPage = new ShowPage()