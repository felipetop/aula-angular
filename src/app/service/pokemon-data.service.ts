import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, map } from 'rxjs';
import { take } from 'rxjs';
import { PokemonData, Specie } from '../models/pokemons-data.model';
import { PokemonRepository } from '../repository/pokmon-data.repository';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonSpecies = new ReplaySubject<PokemonData>(1);
  public gen1Species$ = this.pokemonSpecies.asObservable();

  constructor(private pokemonRepository: PokemonRepository) {}

  public getSpecies(): void {
    this.pokemonRepository.getSpecies().pipe(
      take(1)
    ).subscribe({
      next: response => this.pokemonSpecies.next(response),
      error: error => console.error('Erro ao buscar os dados:', error)
    });
  }

  public getPokemonById(id: number): Observable<Specie | null> {
    return this.gen1Species$.pipe(
      map(pokemonData => pokemonData?.data.species.find(species => species.id === id) || null)
    );
  }
}
