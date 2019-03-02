import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartavistaPage } from './cuartavista.page';

describe('CuartavistaPage', () => {
  let component: CuartavistaPage;
  let fixture: ComponentFixture<CuartavistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuartavistaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartavistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
