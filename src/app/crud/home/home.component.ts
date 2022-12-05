import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud/crud.service';
import { Product } from '../crud/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private products: Product[] = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.getAll().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  delete(id: any) {
    return this.crudService.delete(id);
  }
}
