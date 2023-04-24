import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectFileComponent } from './add-project-file.component';

describe('AddProjectFileComponent', () => {
  let component: AddProjectFileComponent;
  let fixture: ComponentFixture<AddProjectFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
