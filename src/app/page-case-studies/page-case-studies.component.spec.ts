import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCaseStudiesComponent } from './page-case-studies.component';

describe('PageCaseStudiesComponent', () => {
  let component: PageCaseStudiesComponent;
  let fixture: ComponentFixture<PageCaseStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCaseStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
