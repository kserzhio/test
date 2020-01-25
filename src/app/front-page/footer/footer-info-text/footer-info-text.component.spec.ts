import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInfoTextComponent } from './footer-info-text.component';

describe('FooterInfoTextComponent', () => {
  let component: FooterInfoTextComponent;
  let fixture: ComponentFixture<FooterInfoTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterInfoTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterInfoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
