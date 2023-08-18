interface Language {
  name: string;
  url: string;
}

interface Description {
  description: string;
  language: Language;
}

interface Name {
  language: Language;
  name: string;
}

interface PokemonSpecies {
  name: string;
  url: string;
}

interface PokemonEntry {
  entry_number: number;
  pokemon_species: PokemonSpecies;
}

interface Pokedex {
  descriptions: Array<Description>;
  id: number;
  is_main_series: boolean;
  name: string;
  names: Array<Name>;
  pokemon_entries: Array<PokemonEntry>;
}
