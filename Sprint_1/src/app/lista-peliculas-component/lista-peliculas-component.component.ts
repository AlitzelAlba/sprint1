import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-peliculas-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-peliculas-component.component.html',
  styleUrl: './lista-peliculas-component.component.scss'
})
export class ListaPeliculasComponentComponent implements OnInit {
  peliculas: any[] = [];

  archivoSeleccionado: string | null = null;

  constructor(private route: ActivatedRoute, 
    private tmdbService: TmdbService){}
  
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.archivoSeleccionado = params.get('archivo');
      console.log('✅ Archivo seleccionado desde la URL:', this.archivoSeleccionado);

      if (this.archivoSeleccionado) {
        this.tmdbService.getPeliculas(this.archivoSeleccionado).subscribe({
          next: (data: any) => {
            console.log('📦 Datos recibidos del json:', data);
            this.peliculas = data?.data || [];
          },
          error: (error) => {
            console.error('❌ Error al cargar el archivo json:', error);
          }
        });
      } else {
        console.warn('⚠️ No se proporcionó archivo en la URL.');
      }
    });
  }
}



