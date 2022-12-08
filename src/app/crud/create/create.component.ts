import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  productForm!: FormGroup;
  constructor(
    public fb: FormBuilder,
    private crudService: CrudService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      quantity: [''],
    });
  }

  formSubmit() {
    console.log(this.productForm.value);
    this.crudService.create(this.productForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/crud/home');
    });
  }
}
