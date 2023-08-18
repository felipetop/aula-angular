import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ItemListComponent } from './item-list.component';
import { PokemonService } from 'src/app/service/pokemon-data.service';
import { PokemonData } from 'src/app/models/pokemons-data.model';
import { ActivatedRoute } from '@angular/router';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  let pokemonServiceMock: Partial<PokemonService>;

  beforeEach(async () => {

    const pokemonDataMock: PokemonData = {
      data: {
        species: []
      }
    };

    pokemonServiceMock = {
      gen1Species$: of(pokemonDataMock as PokemonData)
    };

    const activatedRouteStub = {
      params: of({ id: '123' }) // Você pode ajustar isso para corresponder ao que o componente espera
    };

    await TestBed.configureTestingModule({
      declarations: [ItemListComponent],
      providers: [
        { provide: PokemonService, useValue: pokemonServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to gen1Species$ from PokemonService on initialization', () => {
    const pokemonDataMock: PokemonData = {
      data: {
        species: [] // Você pode preencher isso com dados fictícios, se necessário
      }
    };
    expect(component.pokemonData).toEqual(pokemonDataMock);
  });

  it('should return correct sprite URL for a given Pokemon ID', () => {
    const pokemonId = 25;
    const expectedUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif`;
    expect(component.getSpriteUrl(pokemonId)).toEqual(expectedUrl);
  });

});
