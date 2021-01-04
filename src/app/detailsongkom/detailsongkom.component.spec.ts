import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsongkomComponent } from './detailsongkom.component';

describe('DetailsongkomComponent', () => {
  let component: DetailsongkomComponent;
  let fixture: ComponentFixture<DetailsongkomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsongkomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsongkomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
