import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSubmissionListComponent } from './project-submission-list.component';

describe('ProjectSubmissionListComponent', () => {
  let component: ProjectSubmissionListComponent;
  let fixture: ComponentFixture<ProjectSubmissionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSubmissionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSubmissionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
