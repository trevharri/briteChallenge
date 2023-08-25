describe('Test pokemon info', () => {

    it('Magikarp', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/magikarp').its('body').then(res => {
            console.log(res)
            const name = res.forms[0].name
            expect(name).to.eql("magikarp")

            expect(res.order).to.eql(210)

            const expectedMoves = ["tackle", "hydro-pump", "splash", "flail", "bounce"]
            const actualMoves = res.moves.map(item => item.move.name)
            expect(expectedMoves).to.eql(actualMoves)
        })
    })
})