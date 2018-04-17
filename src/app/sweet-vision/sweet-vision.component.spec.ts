import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetVisionComponent } from './sweet-vision.component';

describe('SweetVisionComponent', () => {
  let component: SweetVisionComponent;
  let fixture: ComponentFixture<SweetVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
