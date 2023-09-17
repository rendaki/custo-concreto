import { Fornecedor } from './../model/fornecedor';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  URL = 'http://localhost:3000/fornecedors';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(userId: number): Observable<Fornecedor[]> {
    return this.httpClient
      .get<Fornecedor[]>(`${this.URL}/user/${userId}`).pipe(
        catchError((err, caught) => {
          return EMPTY;
        }
      ));
  }
  getAllByCategoria(userId: number, categoria: string): Observable<Fornecedor[]> {
    return this.httpClient
      .get<Fornecedor[]>(`${this.URL}/user/${userId}/categoria/${categoria}`).pipe(
        catchError((err, caught) => {
          return EMPTY;
        }
      ));
  }
  getById(id: number): Observable<Fornecedor> {
    return this.httpClient
      .get<Fornecedor>(`${this.URL}/${id}`);
  }
  save(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.httpClient
      .post<Fornecedor>(
        this.URL,
        JSON.stringify(fornecedor),
        this.httpOptions
      )
  }
  update(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.httpClient
      .put<Fornecedor>(
        `${this.URL}/${fornecedor.id}`,
        JSON.stringify(fornecedor),
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
