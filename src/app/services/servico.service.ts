import { ServicoObra } from './../model/servico.obra';
import { Servico } from './../model/servico';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  URL = 'http://localhost:3000/servicos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(userId: number): Observable<Servico[]> {
    return this.httpClient
      .get<Servico[]>(`${this.URL}/user/${userId}`).pipe(
        catchError((err, caught) => {
          return EMPTY;
        }
      ));
  }
  getById(id: number): Observable<Servico> {
    return this.httpClient
      .get<Servico>(`${this.URL}/${id}`);
  }
  getAllWithObra(userId: number): Observable<ServicoObra[]> {
    return this.httpClient
      .get<ServicoObra[]>(`${this.URL}/user/${userId}/obra`);
  }
  save(servico: Servico): Observable<Servico> {
    return this.httpClient
      .post<Servico>(
        this.URL,
        JSON.stringify(servico),
        this.httpOptions
      )
  }
  update(servico: Servico): Observable<Servico> {
    return this.httpClient
      .put<Servico>(
        `${this.URL}/${servico.id}`,
        JSON.stringify(servico),
        this.httpOptions
      )
  }
  delete(id: number): Observable<Boolean> {
    return this.httpClient
      .delete<Boolean>(
        `${this.URL}/${id}`
      )
  }
}
