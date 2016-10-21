/// <reference path="../../../typings/index.d.ts"/>

import {StudentComponent} from './student.component';
import {TestBed, async} from '@angular/core/testing';

describe('StudentComponent component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [StudentComponent]});
    TestBed.compileComponents();
  }));

  it('should render...', () => {
    const fixture = TestBed.createComponent(StudentComponent);
    fixture.detectChanges();
  });
});
