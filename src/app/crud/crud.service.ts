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
  private apiServer = 'http://localhost:4000/product/';
  constructor(private httpClient: HttpClient) {}

  create(product: any): Observable<Product> {
    return this.httpClient.post<Product>(
      this.apiServer,
      JSON.stringify(product),
      this.httpOptions
    );
  }

  getById(id: any): Observable<Product> {
    return this.httpClient.get<Product>(this.apiServer + id);
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiServer);
  }

  update(id: any, product: any): Observable<Product> {
    return this.httpClient.put<Product>(
      this.apiServer + id,
      JSON.stringify(product),
      this.httpOptions
    );
  }

  delete(id: any): Observable<Product> {
    return this.httpClient.delete<Product>(this.apiServer + id);
  }
}
