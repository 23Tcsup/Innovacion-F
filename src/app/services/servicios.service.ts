import { Injectable } from '@angular/core';
import { Necesidades, Servicio, Solicitantes} from '../models/modelos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private apiUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  // getNecesidades(): Observable<Necesidades[]> {
  //   return this.http.get<Necesidades[]>('http://localhost:3000/api/necesidades');
  // }

  // getServicios(): Observable<Servicio[]> {
  //   return this.http.get<Servicio[]>('http://localhost:3000/api/servicios');
  // }
  // createSolicitantes(solicitantes: FormData): Observable<Solicitantes> {
  //   return this.http.post<Solicitantes>(this.apiUrl, solicitantes);
  // }

  getNecesidades(): Observable<Necesidades[]> {
    return this.http.get<Necesidades[]>(`${this.apiUrl}/necesidades`);
  }

  getServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(`${this.apiUrl}/servicios`);
  }

  createSolicitantes(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/guardar-solicitante`, formData);
  }
 
 }
