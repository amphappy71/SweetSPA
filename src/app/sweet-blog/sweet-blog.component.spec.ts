import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetBlogComponent } from './sweet-blog.component';

describe('SweetBlogComponent', () => {
  let component: SweetBlogComponent;
  let fixture: ComponentFixture<SweetBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
