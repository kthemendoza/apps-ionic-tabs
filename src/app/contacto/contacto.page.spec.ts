import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { contactoPage } from './contacto.page';

describe('contactoPage', () => {
  let component: contactoPage;
  let fixture: ComponentFixture<contactoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [contactoPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(contactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
