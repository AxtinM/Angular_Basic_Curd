import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/crud/crud.service';
import { Product } from 'src/app/crud/product';
import { Category } from '../category';
import { CrudCategoryService } from '../crud.category.service';

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
  products!: Product[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CrudCategoryService,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['categoryId'];

    this.categoryService.getById(this.id).subscribe((res) => {
      console.log(res);
      this.productForm = this.fb.group({
        name: [res.name],
        description: [res.description],
      });

      this.products = res.products;
    });
  }

  onChange(value: string) {
    this.productForm.controls['product'].setValue(value);
  }

  submitForm() {
    if (this.productForm.valid) {
      this.categoryService
        .update(this.id, this.productForm.value)
        .subscribe((res) => {
          console.log('Product updated Successfully');
          this.router.navigateByUrl('/category/list');
        });
    } else {
      console.log(this.productForm.errors);
      this.errorMsg = 'You must provide data';
    }
  }
}
