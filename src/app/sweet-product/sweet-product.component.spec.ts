import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetProductComponent } from './sweet-product.component';

describe('SweetProductComponent', () => {
  let component: SweetProductComponent;
  let fixture: ComponentFixture<SweetProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
