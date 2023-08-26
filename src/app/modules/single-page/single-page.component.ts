import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../service/pokemon-data.service';
import { Specie } from '../../models/pokemons-data.model';
import { LAST_GEN_V_POKEMON_ID } from 'src/app/helper/numbers';

/**
 * Componente para exibir a página de detalhes de um Pokémon específico.
 * Este componente é responsável por buscar e exibir as informações de um Pokémon com base no ID fornecido na rota.
 */
@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent implements OnInit {
  /** Armazena os detalhes do Pokémon específico. */
  public pokemon: Specie | null = null;

  /**
   * @param route - Serviço de rota ativa para acessar os parâmetros da rota.
   * @param pokemonService - Serviço para buscar dados dos Pokémons.
   */
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  /**
   * Inicializa o componente, inscrevendo-se nos parâmetros da rota para buscar o Pokémon específico pelo ID.
   */
  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      const pokemonId = +params['id']; // O sinal de mais converte a string em número
      this.pokemonService.getPokemonById(pokemonId).subscribe(pokemon => {
        this.pokemon = pokemon;
      });
    });
  }

  /**
   * Retorna a classe CSS correspondente ao tipo de Pokémon fornecido.
   * @param typeName - O nome do tipo de Pokémon (por exemplo, 'fire', 'water', etc.).
   * @returns A classe CSS correspondente ao tipo de Pokémon.
   */
  public getTypeClass(typeName: string): string {
    type PokemonType = 'normal' | 'flying' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'poison' | 'rock' | 'ground' | 'bug' | 'steel' | 'fighting' | 'dark' | 'fairy' | 'dragon' | 'ice' | 'ghost';
    const typeClasses: Record<PokemonType, string> = {
      normal: 'bg-gray-300 text-gray-800 p-1 px-4 rounded border border-gray-400',
      flying: 'bg-blue-200 text-blue-800 p-1 px-4 rounded border border-blue-400',
      fire: 'bg-red-300 text-red-800 p-1 px-4 rounded border border-red-400',
      water: 'bg-blue-400 text-blue-800 p-1 px-4 rounded border border-blue-500',
      grass: 'bg-green-300 text-green-800 p-1 px-4 rounded border border-green-400',
      electric: 'bg-yellow-300 text-yellow-800 p-1 px-4 rounded border border-yellow-400',
      psychic: 'bg-pink-300 text-pink-800 p-1 px-4 rounded border border-pink-400',
      poison: 'bg-purple-300 text-purple-800 p-1 px-4 rounded border border-purple-400',
      rock: 'bg-gray-500 text-gray-800 p-1 px-4 rounded border border-gray-600',
      ground: 'bg-yellow-500 text-yellow-900 p-1 px-4 rounded border border-yellow-600',
      bug: 'bg-green-500 text-green-900 p-1 px-4 rounded border border-green-600',
      steel: 'bg-gray-400 text-gray-800 p-1 px-4 rounded border border-gray-500',
      fighting: 'bg-red-600 text-white p-1 px-4 rounded border border-red-700',
      dark: 'bg-gray-800 text-white p-1 px-4 rounded border border-gray-700',
      fairy: 'bg-pink-200 text-pink-800 p-1 px-4 rounded border border-pink-300',
      dragon: 'bg-purple-600 text-white p-1 px-4 rounded border border-purple-700',
      ice: 'bg-blue-300 text-blue-800 p-1 px-4 rounded border border-blue-400',
      ghost: 'bg-indigo-400 text-white p-1 px-4 rounded border border-indigo-500'
    };

    return typeClasses[typeName as PokemonType] || 'bg-white text-black p-1 px-4 rounded border border-gray-400';
  }

  /**
   * Se for até a quinta geração pega o sprite animado, senão pega um sprite estatico
   * @param pokemonId Id do pokémon
   * @returns Link do sprite do pokémon
   */
  public getSpriteUrl(pokemonId: number): string {
    if(pokemonId >= LAST_GEN_V_POKEMON_ID) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
    }
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif`;
  }

}
