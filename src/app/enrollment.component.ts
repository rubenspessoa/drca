import {Component} from '@angular/core';
import {Student} from './student';
import {STUDENTS} from './mock-students';

@Component({
  selector: 'fountain-enrollment',
  template: require('./enrollment.component.html')
})

export class EnrollmentComponent {
  public text: string;
  selectedStudent: Student;
  students = STUDENTS;

  constructor() {
    this.text = 'Estudantes';
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }
}
