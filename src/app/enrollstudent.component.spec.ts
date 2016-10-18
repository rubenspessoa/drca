/// <reference path="../../typings/index.d.ts"/>

import {EnrollStudentComponent} from './enrollstudent.component';
import {TestBed, async} from '@angular/core/testing';

describe('enrollstudent.component component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [EnrollStudentComponent]});
    TestBed.compileComponents();
  }));

  it('should render...', () => {
    const fixture = TestBed.createComponent(EnrollStudentComponent);
    fixture.detectChanges();
  });
});
