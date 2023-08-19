import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/pokemons-data.model';
import { getGenerationGraphQl } from './queries/generation-info.graphql';

/**
 * Serviço responsável por gerenciar as operações relacionadas aos Pokémons.
 * @see {@link PokemonData} para detalhes sobre a estrutura dos dados dos Pokémons.
 */
@Injectable({
  providedIn: 'root'
})
export class GenerationRepository {
  private readonly endpoint = 'https://beta.pokeapi.co/graphql/v1beta';

  /**
   * @param httpClient - Cliente HTTP para fazer requisições.
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Obtém informações sobre as espécies de Pokémon.
   * @returns Um Observable contendo os dados das espécies de Pokémon.
   */
  public getSpecies(generation: string): Observable<PokemonData> {
    const query = getGenerationGraphQl;
    const variables = { generation: [`generation-${generation}`] };


    return this.httpClient.post<PokemonData>(this.endpoint, { query, variables });
  }
}
