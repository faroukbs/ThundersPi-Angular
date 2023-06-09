import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JitsiComponent} from './meet.component';

describe('JitsiComponent', () => {
  let component: JitsiComponent;
  let fixture: ComponentFixture<JitsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JitsiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JitsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
