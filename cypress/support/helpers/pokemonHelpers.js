export class PokemonHelpers {

    checkPokeInfo( name, order, moves ) {
        name = name.toLowerCase()
        cy.request('GET', `https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => {
                expect(response).property('status').to.eql(200)
            })
            .its('body')
            .then(resBody => {
                const actualName = resBody.forms[0].name
                expect(actualName).to.eql(name)

                expect(resBody.order).to.eql(order)

                const actualMoves = resBody.moves.map(item => item.move.name)
                expect(actualMoves).to.eql(moves)
            })
    }
}

export const pokemonHelpers = new PokemonHelpers()