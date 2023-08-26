describe('Test pokemon info', () => {

    it('Magikarp', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/magikarp')
            .then((response) => {
                expect(response).property('status').to.eql(200)
            })
            .its('body')
            .then(resBody => {
                const name = resBody.forms[0].name
                expect(name).to.eql("magikarp")

                expect(resBody.order).to.eql(210)

                const expectedMoves = ["tackle", "hydro-pump", "splash", "flail", "bounce"]
                const actualMoves = resBody.moves.map(item => item.move.name)
                expect(expectedMoves).to.eql(actualMoves)
            })
    })
})