import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSubEditComponent } from './project-sub-edit.component';

describe('ProjectSubEditComponent', () => {
  let component: ProjectSubEditComponent;
  let fixture: ComponentFixture<ProjectSubEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSubEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSubEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
