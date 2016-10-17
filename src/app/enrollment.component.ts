import {Component} from '@angular/core';
import {Student} from './student';

const STUDENTS: Student[] = [
  { num_matricula: 10091234, name: 'Rubens Pessoa de Barros Filho'},
  { num_matricula: 20091234, name: 'Vanessa Soares Vieira'},
  { num_matricula: 30091234, name: 'Caio Barbosa Mota'},
  { num_matricula: 40091234, name: 'Rubens Pessoa de Barros'},
  { num_matricula: 50091234, name: 'Rubiane Kelly da Silva Barros'},
  { num_matricula: 60091234, name: 'Cássio Matheus Vital França'}
];

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
