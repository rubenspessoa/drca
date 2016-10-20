/// <reference path="../../typings/index.d.ts"/>

import {EnrollmentComponent} from './enrollment.component';
import {TestBed, async} from '@angular/core/testing';

describe('enrollmentComponent component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [EnrollmentComponent]});
    TestBed.compileComponents();
  }));

  it('should render...', () => {
    const fixture = TestBed.createComponent(EnrollmentComponent);
    fixture.detectChanges();
  });
});
