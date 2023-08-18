import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, map } from 'rxjs';
import { take } from 'rxjs';
import { PokemonData, Specie } from '../models/pokemons-data.model';
import { PokemonRepository } from '../repository/pokmon-data.repository';

/**
 * Serviço para gerenciar as operações relacionadas aos Pokémons.
 * Este serviço fornece métodos para obter informações sobre as espécies de Pokémon e buscar um Pokémon específico por ID.
 */
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonSpecies = new ReplaySubject<PokemonData>(1);
  /** Observable para as espécies de Pokémon da primeira geração. */
  public gen1Species$ = this.pokemonSpecies.asObservable();

  /**
   * @param pokemonRepository - Repositório para buscar dados dos Pokémons.
   */
  constructor(private pokemonRepository: PokemonRepository) {}

  /**
   * Obtém informações sobre as espécies de Pokémon e armazena em um ReplaySubject.
   */
  public getSpecies(): void {
    this.pokemonRepository.getSpecies().pipe(
      take(1)
    ).subscribe({
      next: response => { this.pokemonSpecies.next(response) },
      error: error => { console.error('Erro ao buscar os dados:', error) }
    });
  }

  /**
   * Busca um Pokémon específico por ID.
   * @param id - O ID do Pokémon a ser buscado.
   * @returns Um Observable contendo a espécie do Pokémon ou null se não for encontrado.
   */
  public getPokemonById(id: number): Observable<Specie | null> {
    return this.gen1Species$.pipe(
      map(pokemonData => pokemonData?.data.species.find(species => species.id === id) || null)
    );
  }
}
