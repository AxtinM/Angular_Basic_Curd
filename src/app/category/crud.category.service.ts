import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root',
})
export class CrudCategoryService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private apiServer = 'http://localhost:3000/category/';

  category!: Category;

  constructor(private http: HttpClient) {}

  getALl(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiServer);
  }

  getById(id: string | number): Observable<Category> {
    return this.http.get<Category>(this.apiServer + id);
  }

  create(dto: Category): Observable<Category> {
    return this.http.post<Category>(
      this.apiServer,
      JSON.stringify(dto),
      this.httpOptions
    );
  }

  update(id: string | number, dto: Category): Observable<Category> {
    return this.http.put<Category>(
      this.apiServer + id,
      JSON.stringify(dto),
      this.httpOptions
    );
  }

  delete(id: string | number): Observable<Category> {
    return this.http.delete<Category>(this.apiServer + id);
  }
}
