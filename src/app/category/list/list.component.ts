import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CrudCategoryService } from '../crud.category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  catogories!: Category[];

  constructor(private categoryService: CrudCategoryService) {}

  ngOnInit(): void {
    this.categoryService.getALl().subscribe((res) => {
      this.catogories = res;
    });
  }

  delete(id: string | number) {
    this.categoryService.delete(id).subscribe((res) => {
      console.log('category deleted successfully : \n', res);
    });
  }
}
