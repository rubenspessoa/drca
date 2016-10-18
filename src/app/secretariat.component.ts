import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';

import {Secretariat} from './services/secretariat';
// import {SecretariatService} from './services/secretariat.service';
import {DISCIPLINES} from './services/mock-disciplines';
import {STUDENTS} from './services/mock-students';

@Component({
  selector: 'fountain-secretariat',
  template: require('./templates/secretariat.component.html')
})

export class SecretariatComponent {
  secretariat: Secretariat;
  text: string;
  disciplines = DISCIPLINES;
  students = STUDENTS;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  gotoDiscipline(disciplineId: number): void {
    this.router.navigate(['discipline/:id', {id: disciplineId }]);
  }

  gotoStudent(studentId: number): void {
    this.router.navigate(['student/:id', {id: studentId }]);
  }
}
