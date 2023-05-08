import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCategoryUpdateComponent } from './quiz-category-update.component';

describe('QuizCategoryUpdateComponent', () => {
  let component: QuizCategoryUpdateComponent;
  let fixture: ComponentFixture<QuizCategoryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizCategoryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCategoryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
