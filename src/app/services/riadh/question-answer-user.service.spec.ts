import { TestBed } from '@angular/core/testing';

import { QuestionAnswerUserService } from './question-answer-user.service';

describe('QuestionAnswerUserService', () => {
  let service: QuestionAnswerUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionAnswerUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
