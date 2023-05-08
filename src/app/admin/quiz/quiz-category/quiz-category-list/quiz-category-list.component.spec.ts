import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCategoryListComponent } from './quiz-category-list.component';

describe('QuizCategoryListComponent', () => {
  let component: QuizCategoryListComponent;
  let fixture: ComponentFixture<QuizCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizCategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
