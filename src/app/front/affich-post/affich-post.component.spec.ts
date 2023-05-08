import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichhPostComponent } from './affich-post.component';

describe('AffichPostComponent', () => {
  let component: AffichhPostComponent;
  let fixture: ComponentFixture<AffichhPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichhPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichhPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
