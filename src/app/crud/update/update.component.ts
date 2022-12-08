import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Product } from '../product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  id!: number;
  productForm!: FormGroup;
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CrudService,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['productId'];

    this.crudService.getById(this.id).subscribe((res) => {
      this.product = res;
      this.productForm = this.fb.group({
        name: [this.product.name],
        description: [this.product.description],
        price: [this.product.price],
        quantity: [this.product.quantity],
      });
    });
  }

  submitForm() {
    this.crudService
      .update(this.id, this.productForm.value)
      .subscribe((res) => {
        console.log('Product updated Successfully');
        this.router.navigateByUrl('/crud/home');
      });
  }
}
