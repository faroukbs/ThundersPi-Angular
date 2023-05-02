import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnswerUserComponent } from './question-answer-user.component';

describe('QuestionAnswerUserComponent', () => {
  let component: QuestionAnswerUserComponent;
  let fixture: ComponentFixture<QuestionAnswerUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAnswerUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAnswerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
