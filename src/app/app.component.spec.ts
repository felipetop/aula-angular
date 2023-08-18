import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PokemonService } from './service/pokemon-data.service';

describe('AppComponent', () => {
  let pokemonServiceMock: Partial<PokemonService>;

  beforeEach(async () => {
    pokemonServiceMock = {
      getSpecies: jasmine.createSpy('getSpecies')
    };

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: PokemonService, useValue: pokemonServiceMock } // Use o mock no lugar do serviço real
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call getSpecies from PokemonService on initialization', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Chama ngOnInit
    expect(pokemonServiceMock.getSpecies).toHaveBeenCalled();
  });

});
