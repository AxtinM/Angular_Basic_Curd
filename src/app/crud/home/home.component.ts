import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public products: Product[] = [];
  errorMsg!: string;

  constructor(public crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.getAll().subscribe((data: Product[]) => {
      console.log(data);
      this.products = data;
    });
  }

  delete(id: any) {
    this.crudService.delete(id).subscribe(
      (data) => {
        this.products = this.products.filter((item) => item._id != data._id);
      },
      (error) => {
        this.errorMsg = error.statusText;
      }
    );
  }
}
