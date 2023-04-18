import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProjectFileComponent } from './all-project-file.component';

describe('AllProjectFileComponent', () => {
  let component: AllProjectFileComponent;
  let fixture: ComponentFixture<AllProjectFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProjectFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProjectFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
