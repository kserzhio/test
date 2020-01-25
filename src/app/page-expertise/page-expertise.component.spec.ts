import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExpertiseComponent } from './page-expertise.component';

describe('PageExpertiseComponent', () => {
  let component: PageExpertiseComponent;
  let fixture: ComponentFixture<PageExpertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageExpertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
