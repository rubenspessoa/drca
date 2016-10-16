/// <reference path="../../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DrcaComponent} from './drca';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})

export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: DrcaComponent
  }
];

export const routing = RouterModule.forRoot(routes);
