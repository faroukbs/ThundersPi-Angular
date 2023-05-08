import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSubComponent } from './project-sub.component';

describe('ProjectSubComponent', () => {
  let component: ProjectSubComponent;
  let fixture: ComponentFixture<ProjectSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
