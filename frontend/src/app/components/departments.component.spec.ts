/// <reference path="../../../typings/index.d.ts"/>

import {DepartmentsComponent} from './departments.component';
import {TestBed, async} from '@angular/core/testing';

describe('departmentsComponent component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [DepartmentsComponent]});
    TestBed.compileComponents();
  }));

  it('should render...', () => {
    const fixture = TestBed.createComponent(DepartmentsComponent);
    fixture.detectChanges();
  });
});
