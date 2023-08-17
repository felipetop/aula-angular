import { Component, OnInit } from '@angular/core';
import { PokemonData } from './models/pokemons-data.model';
import { PokemonService } from './service/pokemon-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public pokemonData: PokemonData | null = null;

  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonService.getSpecies();
  }
}
