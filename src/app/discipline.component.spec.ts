/// <reference path="../../typings/index.d.ts"/>

import {DisciplineComponent} from './discipline.component';
import {TestBed, async} from '@angular/core/testing';

describe('DisciplineComponent component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [DisciplineComponent]});
    TestBed.compileComponents();
  }));

  it('should render...', () => {
    const fixture = TestBed.createComponent(DisciplineComponent);
    fixture.detectChanges();
  });
});
