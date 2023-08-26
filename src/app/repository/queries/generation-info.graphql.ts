export const getGenerationGraphQl = `
  query samplePokeAPIquery($generation: [String!]) {
  species: pokemon_v2_pokemonspecies(where: {pokemon_v2_generation: {name: {_in: $generation  }}}, order_by: {id: asc}) {
    name
    id,
  }
}
`;
