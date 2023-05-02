import { TestBed } from '@angular/core/testing';

import { ProjectSubmissionService } from './project-submission.service';

describe('ProjectSubmissionService', () => {
  let service: ProjectSubmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectSubmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
