import { Routes } from '@angular/router';
import { GenerosPeliculaComponent } from './generos-pelicula/generos-pelicula.component';
import { ListaPeliculasComponentComponent } from './lista-peliculas-component/lista-peliculas-component.component';

export const routes: Routes = [

    {path: '', component: GenerosPeliculaComponent},
    {path: 'listapeliculas/id', component: ListaPeliculasComponentComponent},

];
