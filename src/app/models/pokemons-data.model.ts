export interface Specie {
  name: string;
  id: number;
  baseHappiness: number;
  evolveFromId: number | null;
  pokemonDetail: Array<PokemonDetail>;
  text: Array<TextDescription>;
}

interface PokemonDetail {
  types: Array<PokemonType>;
  baseStat: Array<BaseStat>;
  height: number;
  weight: number;
  abilities: Array<AbilityDetail>;
  sprites: Array<Sprites>;
}

interface PokemonType {
  type: {
    id: number;
    name: string;
  };
}

interface BaseStat {
  stats: number;
  detail: {
    name: string;
  };
}

interface AbilityDetail {
  ability: {
    name: string;
    text: Array<Description>;
  };
}

interface Sprites {
  sprites: string;
}

interface TextDescription {
  description: string;
}

interface Description {
  description: string;
}

export interface PokemonData {
  data: {
    species: Array<Specie>;
  };
}
