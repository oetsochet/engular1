import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomsanComponent } from './komsan.component';

describe('KomsanComponent', () => {
  let component: KomsanComponent;
  let fixture: ComponentFixture<KomsanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomsanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KomsanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
