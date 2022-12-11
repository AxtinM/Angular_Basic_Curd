import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  selectedValue!: any;
  categories!: Category[];

  constructor(
    public fb: FormBuilder,
    private crudService: CrudService,
    private router: Router,
    private categoryService: CrudCategoryService
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      quantity: [''],
    });

    this.categoryService.getALl().subscribe((res) => {
      this.categories = res;
    });
  }

  onChange(value: string) {
    this.selectedValue = value;
  }

  formSubmit() {
    console.log(this.productForm.value);
    this.crudService.create(this.productForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/crud/home');
    });
  }
}
