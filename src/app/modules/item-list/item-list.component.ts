import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LAST_GEN_V_POKEMON_ID } from 'src/app/helper/numbers';
import { PokemonData } from 'src/app/models/pokemons-data.model';
import { GenerationService } from 'src/app/service/generation-data.service';
import { Params } from '@angular/router';

interface RouteParams {
  generation: string;
}

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
  public ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const param: RouteParams = params as RouteParams;
      const generation: string = param.generation;
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
  public getSpriteUrl(pokemonId: number): string {
    if(pokemonId >= LAST_GEN_V_POKEMON_ID) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
    }
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif`;
  }

  /**
   * Solicita os dados de espécies de Pokémon da geração fornecida.
   * @param generation - A geração dos Pokémon.
   */
  public getSpecies(generation: string): void {
    this.pokemonService.getSpecies(generation);
  }

  /**
   * Navega para a rota correspondente à geração fornecida.
   * @param generation - A geração dos Pokémon.
   */
  public navigate(generation: string): void {
    this.router.navigate([`pokemons/${generation}`]);
  }

}
