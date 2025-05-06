import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaPeliculasComponentComponent } from './lista-peliculas-component/lista-peliculas-component.component';
import { GenerosPeliculaComponent } from './generos-pelicula/generos-pelicula.component';
import { SearchPeliculaComponent } from './search-pelicula/search-pelicula.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaPeliculasComponentComponent, GenerosPeliculaComponent, SearchPeliculaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sprint_1';

  
}
