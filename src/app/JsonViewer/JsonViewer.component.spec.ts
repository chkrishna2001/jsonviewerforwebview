/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JsonViewerComponent } from './JsonViewer.component';

describe('JsonViewerComponent', () => {
  let component: JsonViewerComponent;
  let fixture: ComponentFixture<JsonViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
