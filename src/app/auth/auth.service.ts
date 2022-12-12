import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  signIncallBack() {
    throw new Error('Method not implemented.');
  }
  apiServer = 'http://localhost:4000/auth/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  login(dto: any): Observable<any> {
    return this.http
      .post<any>(
        this.apiServer + 'login',
        JSON.stringify(dto),
        this.httpOptions
      )
      .pipe(
        map((res) => {
          const token = res['access_token'];
          localStorage.setItem('id_token', token);
          return token;
        }),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  register(dto: any): Observable<any> {
    return this.http
      .post<any>(
        this.apiServer + 'register',
        JSON.stringify(dto),
        this.httpOptions
      )
      .pipe(
        map((res) => {
          const token = res['access_token'];
          localStorage.setItem('id_token', token);
          return token;
        }),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }
}
