import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemons-data.model';
import { PokemonService } from 'src/app/service/pokemon-data.service';

/**
 * Componente para exibir uma lista de itens de Pokémon.
 * Este componente é responsável por se inscrever nos dados de Pokémon da primeira geração e renderizar uma lista de Pokémons.
 */
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  public pokemonData: PokemonData | null = null;

  /**
   * @param pokemonService - Serviço para acessar os dados de Pokémon.
   */
  constructor(
    private pokemonService: PokemonService
  ) {}

  /**
   * Inicializa o componente, inscrevendo-se nos dados de Pokémon da primeira geração.
   */
  ngOnInit(): void {
    this.pokemonService.gen1Species$.subscribe(data => {
      this.pokemonData = data;
    });
  }

  /**
   * Retorna a URL do sprite animado para um Pokémon específico.
   * @param pokemonId - O ID do Pokémon.
   * @returns A URL do sprite animado correspondente ao ID do Pokémon.
   */
  getSpriteUrl(pokemonId: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif`;
  }

}
