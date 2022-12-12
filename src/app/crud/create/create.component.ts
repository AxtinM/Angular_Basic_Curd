import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/category/category';
import { CrudCategoryService } from 'src/app/category/crud.category.service';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  productForm!: FormGroup;
  categories!: Category[];
  errorMsg!: string;

  constructor(
    public fb: FormBuilder,
    private crudService: CrudService,
    private router: Router,
    private categoryService: CrudCategoryService
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });

    this.categoryService.getALl().subscribe((res) => {
      this.categories = res;
    });
  }

  onChange(value: string) {
    this.productForm.controls['category'].setValue(value);
  }

  formSubmit() {
    if (!this.productForm.valid) {
      this.crudService.create(this.productForm.value).subscribe((res) => {
        console.log(res);
      });
      this.router.navigateByUrl('product/list');
    } else {
      this.errorMsg = 'You need to make sure the date is correct !';
    }
  }
}
