import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarsearchComponent } from './donarsearch.component';

describe('DonarsearchComponent', () => {
  let component: DonarsearchComponent;
  let fixture: ComponentFixture<DonarsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonarsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonarsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
