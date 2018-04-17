import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetNavComponent } from './sweet-nav.component';

describe('SweetNavComponent', () => {
  let component: SweetNavComponent;
  let fixture: ComponentFixture<SweetNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
