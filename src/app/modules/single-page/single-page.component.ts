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
}
