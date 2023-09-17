import { AquisicaoObra } from './../model/aquisicao.obra';
import { Aquisicao } from './../model/aquisicao';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AquisicaoService {

  URL = 'http://localhost:3000/aquisicoes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(userId: number): Observable<Aquisicao[]> {
    return this.httpClient
      .get<Aquisicao[]>(`${this.URL}/user/${userId}`).pipe(
        catchError((err, caught) => {
          return EMPTY;
        }
      ));
  }
  getById(id: number): Observable<Aquisicao> {
    return this.httpClient
      .get<Aquisicao>(`${this.URL}/${id}`);
  }
  getAllWithObra(userId: number): Observable<AquisicaoObra[]> {
    return this.httpClient
      .get<AquisicaoObra[]>(`${this.URL}/user/${userId}/obra`);
  }
  save(aquisicao: Aquisicao): Observable<Aquisicao> {
    return this.httpClient
      .post<Aquisicao>(
        this.URL,
        JSON.stringify(aquisicao),
        this.httpOptions
      )
  }
  update(aquisicao: Aquisicao): Observable<Aquisicao> {
    return this.httpClient
      .put<Aquisicao>(
        `${this.URL}/${aquisicao.id}`,
        JSON.stringify(aquisicao),
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
