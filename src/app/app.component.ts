import { Component, OnInit } from '@angular/core';
import { PokemonService } from './service/pokemon-data.service';

/**
 * Componente raiz da aplicação.
 * Este componente é responsável por inicializar a busca das espécies de Pokémon quando a aplicação é carregada.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /**
   * @param pokemonService - Serviço para acessar os dados de Pokémon.
   */
  constructor(
    private pokemonService: PokemonService
  ) {}

  /**
   * Obtém informações sobre as espécies de Pokémon e armazena em um ReplaySubject.
   * Este método é chamado durante a inicialização de um componente para carregar os dados de Pokémon necessários.
   * Ele desencadeia a busca de dados que é essencial para o funcionamento de toda a aplicação.
   */
  ngOnInit(): void {
    this.pokemonService.getSpecies();
  }
}
