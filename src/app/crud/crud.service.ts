import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private apiServer = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

  create(product: any): Observable<Product> {
    return this.httpClient.post<Product>(
      this.apiServer + '/products/',
      JSON.stringify(product),
      this.httpOptions
    );
  }

  getById(id: any): Observable<Product> {
    return this.httpClient.get<Product>(this.apiServer + '/products/' + id);
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiServer + '/products/');
  }

  update(id: any, product: any): Observable<Product> {
    return this.httpClient.put<Product>(
      this.apiServer + '/products/' + id,
      JSON.stringify(product),
      this.httpOptions
    );
  }

  delete(id: any): Observable<Product> {
    return this.httpClient.delete<Product>(this.apiServer + '/products/' + id);
  }
}
