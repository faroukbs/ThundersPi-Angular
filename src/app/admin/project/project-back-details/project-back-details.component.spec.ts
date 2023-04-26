import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBackComponent } from './project-back-details.component';

describe('ProjectBackComponent', () => {
  let component: ProjectBackComponent;
  let fixture: ComponentFixture<ProjectBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
