import { TestBed } from '@angular/core/testing';

import { QuizCategoryService } from './quiz-category.service';

describe('QuizCategoryService', () => {
  let service: QuizCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
