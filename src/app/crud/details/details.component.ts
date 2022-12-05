import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Product } from '../product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id!: number;
  public product!: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crudService: CrudService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['productId'];

    this.crudService.getById(this.id).subscribe((data: Product) => {
      this.product = data;
    });
  }
}
