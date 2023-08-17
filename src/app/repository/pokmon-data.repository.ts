import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/pokemons-data.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonRepository {
  private readonly endpoint = 'https://beta.pokeapi.co/graphql/v1beta';

  constructor(private httpClient: HttpClient) { }

  public getSpecies(): Observable<PokemonData> {
    const query = `
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
          abilities: pokemon_v2_pokemonabilities {
            ability: pokemon_v2_ability {
              name
              text: pokemon_v2_abilityflavortexts(where: {language_id: {_eq: 9}} limit:1) {
                description: flavor_text
              }
            }
          }
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

    return this.httpClient.post<PokemonData>(this.endpoint, { query });
  }
}
