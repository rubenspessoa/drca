/// <reference path="../../typings/index.d.ts"/>

import {Secretariat.component} from './secretariat.component';
import {TestBed, async} from '@angular/core/testing';

describe('secretariat.component component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [secretariat.component]});
    TestBed.compileComponents();
  }));

  it('should render...', () => {
    const fixture = TestBed.createComponent(secretariat.component);
    fixture.detectChanges();
  });
});
