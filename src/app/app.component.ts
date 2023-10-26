import { Component, OnInit } from '@angular/core';
import { PokemonService } from './service/pokemon-data.service';
import { LoadingService } from './service/loading.service';

/**
 * Componente raiz da aplicação.
 * Este componente é responsável por inicializar a busca das espécies de Pokémon quando a aplicação é carregada.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
