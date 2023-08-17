import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemons-data.model';
import { PokemonService } from 'src/app/service/pokemon-data.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  public pokemonData: PokemonData | null = null;

  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonService.gen1Species$.subscribe(data => {
      this.pokemonData = data;
    });
  }

  getSpriteUrl(pokemonId: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif`;
  }

}
