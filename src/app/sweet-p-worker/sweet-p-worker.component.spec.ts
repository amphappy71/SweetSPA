import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetPWorkerComponent } from './sweet-p-worker.component';

describe('SweetPWorkerComponent', () => {
  let component: SweetPWorkerComponent;
  let fixture: ComponentFixture<SweetPWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetPWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetPWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
