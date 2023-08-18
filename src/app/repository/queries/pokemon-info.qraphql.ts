export const getPokemonsGraphQl = `
    query samplePokeAPIquery {
      species: pokemon_v2_pokemonspecies(where: {pokemon_v2_generation: {name: {_eq: "generation-i"}}}, order_by: {id: asc}) {
        name
        id,
        baseHappiness: base_happiness,
        evolveFromId: evolves_from_species_id
        pokemonDetail: pokemon_v2_pokemons {
          types: pokemon_v2_pokemontypes {
            type: pokemon_v2_type {
              id
              name
            }
          }
          baseStat: pokemon_v2_pokemonstats {
            stats: base_stat
            detail: pokemon_v2_stat {
              name
            }
          }
          height
          weight
          sprites: pokemon_v2_pokemonsprites {
            sprites
          }
        }
         text: pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}} limit:1) {
          description: flavor_text
        }
      }
    }
`;
