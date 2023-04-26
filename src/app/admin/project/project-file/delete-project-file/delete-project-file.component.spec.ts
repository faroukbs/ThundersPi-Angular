import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProjectFileComponent } from './delete-project-file.component';

describe('DeleteProjectFileComponent', () => {
  let component: DeleteProjectFileComponent;
  let fixture: ComponentFixture<DeleteProjectFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProjectFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProjectFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
