import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectFileComponent } from './update-project-file.component';

describe('UpdateProjectFileComponent', () => {
  let component: UpdateProjectFileComponent;
  let fixture: ComponentFixture<UpdateProjectFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProjectFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProjectFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
