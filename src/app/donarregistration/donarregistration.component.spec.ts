import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarregistrationComponent } from './donarregistration.component';

describe('DonarregistrationComponent', () => {
  let component: DonarregistrationComponent;
  let fixture: ComponentFixture<DonarregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonarregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonarregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
