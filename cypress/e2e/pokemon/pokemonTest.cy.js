import { pokemonHelpers } from "../../support/helpers/pokemonHelpers"

describe('Test Pokemon for Brite', () => {

    it('Magikarp', () => {
        pokemonHelpers.checkPokeInfo(
            'Magikarp',
            210,
            ["tackle", "hydro-pump", "splash", "flail", "bounce"]
        )
    })

})