import {Component} from '@angular/core';
import { Router } from '@angular/router';

import {Student} from './services/student';
import {STUDENTS} from './services/mock-students';

@Component({
  selector: 'fountain-enrollment',
  template: require('./templates/enrollment.component.html')
})

export class EnrollmentComponent {
  public text: string;
  selectedStudent: Student;
  students = STUDENTS;

  constructor(private router: Router) {
    this.text = 'Estudantes';
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

  gotoEnrollStudent(studentid: number): void {
    this.router.navigate(['enroll-student/:id', {id: studentid}]);
  }
}
