import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  constructor(private http: HttpClient) {}

  getPeliculas(archivo: string): Observable<any> {
    return this.http.get<any>(`assets/${archivo}`);
  }
}

