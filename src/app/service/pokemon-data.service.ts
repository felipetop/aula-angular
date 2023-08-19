import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, map } from 'rxjs';
import { take } from 'rxjs';
import { PokemonData, Specie } from '../models/pokemons-data.model';
import { PokemonRepository } from '../repository/pokemon-data.repository';

/**
 * Serviço para gerenciar as operações relacionadas aos Pokémons.
 * Este serviço fornece métodos para obter informações sobre as espécies de Pokémon e buscar um Pokémon específico por ID.
 */
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private pokemonRepository: PokemonRepository) {}

  public getPokemonById(id: number): Observable<Specie | null> {
    return this.pokemonRepository.getPokemonById(id).pipe(
      take(1),
      map(response => response?.data?.species[0] || null)
    );
  }
}
