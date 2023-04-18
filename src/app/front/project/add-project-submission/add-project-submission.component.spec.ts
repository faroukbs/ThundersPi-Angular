import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectSubmissionComponent } from './add-project-submission.component';

describe('AddProjectSubmissionComponent', () => {
  let component: AddProjectSubmissionComponent;
  let fixture: ComponentFixture<AddProjectSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
