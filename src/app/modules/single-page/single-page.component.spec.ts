import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SinglePageComponent } from './single-page.component';
import { PokemonService } from '../../service/pokemon-data.service';
import { Specie } from '../../models/pokemons-data.model';

describe('SinglePageComponent', () => {
  let component: SinglePageComponent;
  let fixture: ComponentFixture<SinglePageComponent>;
  let pokemonServiceMock: Partial<PokemonService>;
  let activatedRouteStub: Partial<ActivatedRoute>;

  beforeEach(async () => {
    // Mock do serviço de Pokémon
    pokemonServiceMock = {
      getPokemonById: jasmine.createSpy('getPokemonById').and.returnValue(of({
        name: 'Charmander',
        id: 1,
        baseHappiness: 70,
        evolveFromId: null,
        pokemonDetail: [{
          types: [{ type: { id: 1, name: 'fire' } }],
          baseStat: [],
          height: 6,
          weight: 85,
          abilities: [],
          sprites: []
        }],
        text: []
      } as Specie))
    };

    // Stub para ActivatedRoute
    activatedRouteStub = {
      params: of({ id: '1' })
    };

    await TestBed.configureTestingModule({
      declarations: [SinglePageComponent],
      providers: [
        { provide: PokemonService, useValue: pokemonServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch Pokemon details by ID on initialization', () => {
    expect(pokemonServiceMock.getPokemonById).toHaveBeenCalledWith(1);
    expect(component.pokemon).toEqual({
      name: 'Charmander',
      id: 1,
      baseHappiness: 70,
      evolveFromId: null,
      pokemonDetail: [{
        types: [{ type: { id: 1, name: 'fire' } }],
        baseStat: [],
        height: 6,
        weight: 85,
        abilities: [],
        sprites: []
      }],
      text: []
    } as Specie);
  });

  it('should return correct CSS class for a given Pokemon type', () => {
    const typeName = 'fire';
    const expectedClass = 'bg-red-300 text-red-800 p-1 px-4 rounded border border-red-400';
    expect(component.getTypeClass(typeName)).toEqual(expectedClass);
  });
});
