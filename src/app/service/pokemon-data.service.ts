import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { take } from 'rxjs';
import { Specie } from '../models/pokemons-data.model';
import { PokemonRepository } from '../repository/pokemon-data.repository';

/**
 * Serviço para gerenciar as operações relacionadas aos Pokémons.
 * Este serviço fornece métodos para obter informações sobre as espécies de Pokémon e buscar um Pokémon específico por ID.
 */
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  /**
   * @param pokemonRepository - Repositório para acessar os dados dos Pokémons.
   */
  constructor(private pokemonRepository: PokemonRepository) {}

  /**
   * Obtém um Pokémon específico por ID.
   * @param id - O ID do Pokémon.
   * @returns Um Observable com a espécie do Pokémon, ou nulo se não encontrado.
   */
  public getPokemonById(id: number): Observable<Specie | null> {
    return this.pokemonRepository.getPokemonById(id).pipe(
      take(1),
      map(response => response?.data?.species[0])
    );
  }
}
