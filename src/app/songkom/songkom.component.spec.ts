import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongkomComponent } from './songkom.component';

describe('SongkomComponent', () => {
  let component: SongkomComponent;
  let fixture: ComponentFixture<SongkomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongkomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongkomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
