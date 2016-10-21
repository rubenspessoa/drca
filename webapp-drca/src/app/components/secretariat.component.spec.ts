/// <reference path="../../../typings/index.d.ts"/>

import {SecretariatComponent} from './secretariat.component';
import {TestBed, async} from '@angular/core/testing';

describe('secretariat.component component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [SecretariatComponent]});
    TestBed.compileComponents();
  }));

  it('should render...', () => {
    const fixture = TestBed.createComponent(SecretariatComponent);
    fixture.detectChanges();
  });
});
