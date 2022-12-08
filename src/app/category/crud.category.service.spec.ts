import { TestBed } from '@angular/core/testing';

import { CrudCategoryService } from './crud.category.service';

describe('CrudCategoryService', () => {
  let service: CrudCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
