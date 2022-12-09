import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudCategoryService } from '../crud.category.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  categoryForm!: FormGroup;

  constructor(
    private categoryService: CrudCategoryService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: [''],
      description: [''],
    });
  }

  formSubmit() {
    this.categoryService.create(this.categoryForm.value).subscribe((res) => {
      console.log('Category created successfully\n', res);
      this.router.navigateByUrl('category/list');
    });
  }
}
