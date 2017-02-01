/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpJsonpComponent } from './http-jsonp.component';

describe('HttpJsonpComponent', () => {
  let component: HttpJsonpComponent;
  let fixture: ComponentFixture<HttpJsonpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpJsonpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpJsonpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
