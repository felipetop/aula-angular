import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../service/pokemon-data.service';
import { Specie } from '../../models/pokemons-data.model';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent {
  public pokemon: Specie | null = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const pokemonId = +params['id']; // O sinal de mais converte a string em número
      this.pokemonService.getPokemonById(pokemonId).subscribe(pokemon => {
        this.pokemon = pokemon;
      });
    });
  }

  getTypeClass(typeName: string): string {
    switch (typeName) {
      case 'normal': return 'bg-gray-300 text-gray-800 p-1 px-4 rounded border border-gray-400';
      case 'flying': return 'bg-blue-200 text-blue-800 p-1 px-4 ounded border border-blue-400';
      case 'fire': return 'bg-red-300 text-red-800 p-1 px-4 ounded border border-red-400';
      case 'water': return 'bg-blue-400 text-blue-800 p-1 px-4 ounded border border-blue-500';
      case 'grass': return 'bg-green-300 text-green-800 p-1 px-4 ounded border border-green-400';
      case 'electric': return 'bg-yellow-300 text-yellow-800 p-1 px-4 ounded border border-yellow-400';
      case 'psychic': return 'bg-pink-300 text-pink-800 p-1 px-4 ounded border border-pink-400';
      case 'poison': return 'bg-purple-300 text-purple-800 p-1 px-4 ounded border border-purple-400';
      case 'rock': return 'bg-gray-500 text-gray-800 p-1 px-4 ounded border border-gray-600';
      case 'ground': return 'bg-yellow-500 text-yellow-900 p-1 px-4 ounded border border-yellow-600';
      case 'bug': return 'bg-green-500 text-green-900 p-1 px-4 ounded border border-green-600';
      case 'steel': return 'bg-gray-400 text-gray-800 p-1 px-4 ounded border border-gray-500';
      case 'fighting': return 'bg-red-600 text-white p-1 px-4 ounded border border-red-700';
      case 'dark': return 'bg-gray-800 text-white p-1 px-4 ounded border border-gray-700';
      case 'fairy': return 'bg-pink-200 text-pink-800 p-1 px-4 ounded border border-pink-300';
      case 'dragon': return 'bg-purple-600 text-white p-1 px-4 ounded border border-purple-700';
      case 'ice': return 'bg-blue-300 text-blue-800 p-1 px-4 ounded border border-blue-400';
      case 'ghost': return 'bg-indigo-400 text-white p-1 px-4 ounded border border-indigo-500';
      default: return 'bg-white text-black p-1 px-4 ounded border border-gray-400';
    }
  }
}
