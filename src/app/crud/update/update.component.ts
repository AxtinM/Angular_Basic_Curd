import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/category/category';
import { CrudCategoryService } from 'src/app/category/crud.category.service';
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
  categories!: Category[];
  errorMsg!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CrudService,
    private categoryService: CrudCategoryService,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['productId'];

    this.crudService.getById(this.id).subscribe((res) => {
      console.log(res);
      this.productForm = this.fb.group({
        name: [res.name],
        description: [res.description],
        price: [res.price],
        quantity: [res.quantity],
        category: [res.category],
      });
    });

    this.categoryService.getALl().subscribe((res) => {
      this.categories = res;
    });
  }

  onChange(value: string) {
    this.productForm.controls['category'].setValue(value);
  }

  submitForm() {
    if (this.productForm.valid) {
      this.crudService
        .update(this.id, this.productForm.value)
        .subscribe((res) => {
          console.log('Product updated Successfully');
          this.router.navigateByUrl('/product/list');
        });
    } else {
      console.log(this.productForm.errors);
      this.errorMsg = 'You must provide data';
    }
  }
}
