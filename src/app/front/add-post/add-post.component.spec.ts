import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPosttComponent } from './add-post.component';

describe('AddPostComponent', () => {
  let component: AddPosttComponent;
  let fixture: ComponentFixture<AddPosttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPosttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPosttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
