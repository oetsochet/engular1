import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealdthComponent } from './healdth.component';

describe('HealdthComponent', () => {
  let component: HealdthComponent;
  let fixture: ComponentFixture<HealdthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealdthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealdthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
