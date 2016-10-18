import {Component, OnInit} from '@angular/core';

// import {StudentService} from './services/student.service';
// import {SecretariatService} from './services/secretariat.service';
// import {DepartmentService} from './services/department.service';
import {DISCIPLINES} from './services/mock-disciplines';
import {Discipline} from './services/discipline';


@Component({
  selector: 'fountain-enrollstudent',
  template: require('./templates/enrollstudent.component.html')
})
export class EnrollStudentComponent {
  public text: string;
  selectedDiscipline: Discipline;
  disciplines = DISCIPLINES;

  constructor() {
    this.text = 'My brand new component!';
  }

  onSelect(discipline: Discipline): void {
    this.selectedDiscipline = discipline;
  }
}
