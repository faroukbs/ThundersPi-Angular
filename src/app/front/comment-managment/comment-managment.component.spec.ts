import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentManagmenttComponent } from './comment-managment.component';

describe('CommentManagmentComponent', () => {
  let component: CommentManagmenttComponent;
  let fixture: ComponentFixture<CommentManagmenttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentManagmenttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentManagmenttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
