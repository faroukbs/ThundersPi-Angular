import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizUpdateComponent } from './quiz-update.component';

describe('QuizUpdateComponent', () => {
  let component: QuizUpdateComponent;
  let fixture: ComponentFixture<QuizUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
