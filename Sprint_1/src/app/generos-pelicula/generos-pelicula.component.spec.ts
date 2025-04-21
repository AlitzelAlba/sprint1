import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosPeliculaComponent } from './generos-pelicula.component';

describe('GenerosPeliculaComponent', () => {
  let component: GenerosPeliculaComponent;
  let fixture: ComponentFixture<GenerosPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerosPeliculaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerosPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
