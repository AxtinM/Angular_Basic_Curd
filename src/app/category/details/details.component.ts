import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';
import { CrudCategoryService } from '../crud.category.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  category!: Category;

  constructor(
    private categoryService: CrudCategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['categoryId'];
    this.categoryService.getById(id).subscribe((res) => {
      this.category = res;
    });
  }
}
