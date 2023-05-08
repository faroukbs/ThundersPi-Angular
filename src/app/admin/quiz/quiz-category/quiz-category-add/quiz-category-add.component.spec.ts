import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCategoryAddComponent } from './quiz-category-add.component';

describe('QuizCategoryAddComponent', () => {
  let component: QuizCategoryAddComponent;
  let fixture: ComponentFixture<QuizCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizCategoryAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
