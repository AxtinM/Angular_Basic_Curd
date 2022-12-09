import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiServer = 'http://localhost:3000/auth/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  login(dto: User): Observable<User> {
    return this.http.post<User>(
      this.apiServer + 'login',
      JSON.stringify(dto),
      this.httpOptions
    );
  }

  register(dto: User): Observable<User> {
    return this.http.post<User>(
      this.apiServer + 'register',
      JSON.stringify(dto),
      this.httpOptions
    );
  }
}
