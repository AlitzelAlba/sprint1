import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

declare let bootstrap: any;

@Component({
  selector: 'app-generos-pelicula',
  imports: [],
  templateUrl: './generos-pelicula.component.html',
  styleUrl: './generos-pelicula.component.scss'
})
export class GenerosPeliculaComponent implements OnInit {
  
  @ViewChild('miGenero', { static: true }) dropdownButton!: ElementRef; // Selecciona el botón

  constructor(@Inject(PLATFORM_ID) private platformId: object, private router: Router) {}

  verGenero(archivo: string){
    this.router.navigate(['/listapeliculas', archivo]);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.dropdownButton) {
        new bootstrap.Dropdown(this.dropdownButton.nativeElement); // Inicializa Bootstrap correctamente
      }
    }
  }
}

