import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ItemListComponent } from './item-list.component';
import { PokemonData } from 'src/app/models/pokemons-data.model';
import { ActivatedRoute } from '@angular/router';
import { GenerationService } from 'src/app/service/generation-data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  let generationService: GenerationService;

  const pokemonDataMock: PokemonData = {
    data: {
      species: []
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ItemListComponent],
      providers: [
        GenerationService,
        { provide: ActivatedRoute, useValue: { params: of({ generation: 'gen1' }) } }
      ]
    }).compileComponents();

    generationService = TestBed.inject(GenerationService);
    spyOn(generationService, 'getSpecies').and.callThrough();

    Object.defineProperty(generationService, 'gen1Species$', {
      get: () => of(pokemonDataMock)
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to gen1Species$ from GenerationService on initialization', () => {
    expect(component.pokemonData).toEqual(pokemonDataMock);
  });

  it('should return correct sprite URL for a given Pokemon ID', () => {
    const pokemonId = 25;
    const expectedUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif`;
    expect(component.getSpriteUrl(pokemonId)).toEqual(expectedUrl);
  });

});
