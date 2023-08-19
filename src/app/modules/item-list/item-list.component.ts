import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonData } from 'src/app/models/pokemons-data.model';
import { GenerationService } from 'src/app/service/generation-data.service';

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
    private router: Router,
    private route: ActivatedRoute,
    private pokemonService: GenerationService
  ) {}

  /**
   * Inicializa o componente, inscrevendo-se nos dados de Pokémon da primeira geração.
   */
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const generation = params['generation']; // O sinal de mais converte a string em número
      this.getSpecies(generation);
      this.pokemonService.gen1Species$.subscribe(data => {
        this.pokemonData = data;
      });
    });
  }

  /**
   * Retorna a URL do sprite animado para um Pokémon específico.
   * @param pokemonId - O ID do Pokémon.
   * @returns A URL do sprite animado correspondente ao ID do Pokémon.
   */
  getSpriteUrl(pokemonId: number): string {
    if(pokemonId >= 650) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
    }
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif`;
  }

  public getSpecies(generation: string): void {
    this.pokemonService.getSpecies(generation);
  }

  public navigate(generation: string): void {
    this.router.navigate([`pokemons/${generation}`]);
  }

}
