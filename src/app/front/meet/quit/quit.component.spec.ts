import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuitComponent } from './quit.component';

describe('QuitComponent', () => {
  let component: QuitComponent;
  let fixture: ComponentFixture<QuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
