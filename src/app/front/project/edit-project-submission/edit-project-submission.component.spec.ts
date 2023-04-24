import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectSubmissionComponent } from './edit-project-submission.component';

describe('EditProjectSubmissionComponent', () => {
  let component: EditProjectSubmissionComponent;
  let fixture: ComponentFixture<EditProjectSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProjectSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
