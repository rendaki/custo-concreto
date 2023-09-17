import { User } from './../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = 'http://localhost:3000/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getByUserName(username: string): Observable<User[]> {
    return this.httpClient
      .get<User[]>(`${this.URL}?username=${username}`);
  }


}
