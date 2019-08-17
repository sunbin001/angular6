/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QqNumberComponent } from './qq-number.component';

describe('QqNumberComponent', () => {
  let component: QqNumberComponent;
  let fixture: ComponentFixture<QqNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
