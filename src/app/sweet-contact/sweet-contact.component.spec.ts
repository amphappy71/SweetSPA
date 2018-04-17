import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetContactComponent } from './sweet-contact.component';

describe('SweetContactComponent', () => {
  let component: SweetContactComponent;
  let fixture: ComponentFixture<SweetContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
