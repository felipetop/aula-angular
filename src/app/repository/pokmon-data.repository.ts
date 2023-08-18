import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/pokemons-data.model';
import { getPokemonsGraphQl } from './queries/pokemon-info.qraphql';

/**
 * Serviço responsável por gerenciar as operações relacionadas aos Pokémons.
 * @see {@link PokemonData} para detalhes sobre a estrutura dos dados dos Pokémons.
 */
@Injectable({
  providedIn: 'root'
})
export class PokemonRepository {
  private readonly endpoint = 'https://beta.pokeapi.co/graphql/v1beta';

  /**
   * @param httpClient - Cliente HTTP para fazer requisições.
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Obtém informações sobre as espécies de Pokémon.
   * @returns Um Observable contendo os dados das espécies de Pokémon.
   */
  public getSpecies(): Observable<PokemonData> {
    const query = getPokemonsGraphQl

    return this.httpClient.post<PokemonData>(this.endpoint, { query });
  }
}
