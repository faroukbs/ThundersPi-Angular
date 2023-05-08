import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSubAddComponent } from './project-sub-add.component';

describe('ProjectSubAddComponent', () => {
  let component: ProjectSubAddComponent;
  let fixture: ComponentFixture<ProjectSubAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSubAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSubAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
