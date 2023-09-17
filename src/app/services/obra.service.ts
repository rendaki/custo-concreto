import { ObraAquisoesServicos } from './../model/obra.aquisoes.servicos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { Obra } from 'src/app/model/obra';

@Injectable({
  providedIn: 'root'
})
export class ObraService {
  URL = 'http://localhost:3000/obras';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  async getAllFull(userId: number, id: number): Promise<ObraAquisoesServicos[]> {
    return await firstValueFrom(this.httpClient
      .get<ObraAquisoesServicos[]>(`${this.URL}/user/${userId}/id/${id}/full`))
  }

  async getAll(userId: number): Promise<Obra[]> {
    return await firstValueFrom(this.httpClient
      .get<Obra[]>(`${this.URL}/user/${userId}`))
  }
  async getById(id: number): Promise<Obra> {
    return await firstValueFrom(this.httpClient
      .get<Obra>(`${this.URL}/${id}`))
  }
  async save(obra: Obra): Promise<Obra> {
    return await firstValueFrom(this.httpClient
      .post<Obra>(
        this.URL,
        JSON.stringify(obra),
        this.httpOptions
      ))
  }
  async update(obra: Obra): Promise<Obra> {
    return await firstValueFrom(this.httpClient
      .put<Obra>(
        `${this.URL}/${obra.id}`,
        JSON.stringify(obra),
        this.httpOptions
      ))
  }
  async delete(id: number): Promise<Boolean> {
    return await firstValueFrom(this.httpClient
      .delete<Boolean>(
        `${this.URL}/${id}`
      ))
  }
}
