interface AbilityDetail {
  name: string;
  url: string;
}

interface Ability {
  ability: AbilityDetail;
  is_hidden: boolean;
  slot: number;
}

interface Form {
  name: string;
  url: string;
}

interface Version {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  version: Version;
}

interface Item {
  name: string;
  url: string;
}

interface VersionDetail {
  rarity: number;
  version: Version;
}

interface HeldItem {
  item: Item;
  version_details: Array<VersionDetail>;
}

interface MoveLearnMethod {
  name: string;
  url: string;
}

interface VersionGroup {
  name: string;
  url: string;
}

interface MoveLearnDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
}

interface Move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: Array<MoveLearnDetail>;
}

interface Species {
  name: string;
  url: string;
}

interface Sprites {
  back_default: string;
  back_female: null | string;
  back_shiny: string;
  back_shiny_female: null | string;
  front_default: string;
  front_female: null | string;
  front_shiny: string;
  front_shiny_female: null | string;
  other: {
    [key: string]: {
      front_default: string;
      front_female: null | string;
      front_shiny: string;
      front_shiny_female: null | string;
    };
  };
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface Pokemon {
  abilities: Array<Ability>;
  base_experience: number;
  forms: Array<Form>;
  game_indices: Array<GameIndex>;
  height: number;
  held_items: Array<HeldItem>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<Move>;
  name: string;
  order: number;
  species: Species;
  sprites: Sprites;
  stats: Array<Stat>;
  types: Array<Type>;
  weight: number;
}

