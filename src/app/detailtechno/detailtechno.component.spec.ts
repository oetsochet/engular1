import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtechnoComponent } from './detailtechno.component';

describe('DetailtechnoComponent', () => {
  let component: DetailtechnoComponent;
  let fixture: ComponentFixture<DetailtechnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailtechnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailtechnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
