export class PokemonHelpers {

    checkPokeInfo( name, order, moves ) {
        name = name.toLowerCase()
        cy.request('GET', `https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => {
                expect(response).property('status').to.eql(200)
            })
            .its('body')
            .then(resBody => {
                expect(resBody).to.be.an('object')

                expect(resBody).to.have.property('name')
                expect(resBody.name).to.eql(name)

                expect(resBody).to.have.property('order')
                expect(resBody.order).to.eql(order)

                expect(resBody).to.have.property('moves')
                const actualMoves = resBody.moves.map(moveObj => moveObj.move.name)
                expect(actualMoves.length).to.eql(moves.length)
                expect(actualMoves).to.have.members(moves)
            })
    }

}

export const pokemonHelpers = new PokemonHelpers()