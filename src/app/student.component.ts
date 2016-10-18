import {Component} from '@angular/core';
import {StudentService} from './services/student.service';
import {Student} from './services/student';

@Component({
  selector: 'fountain-student',
  template: require('./templates/student.component.html')
})

export class StudentComponent {
  public text: string;
  public selectedStudent: Student;
  public students: Student[];

  constructor(private studentService: StudentService) {
    this.text = 'Comprovante de Matrícula';
  }

  onClick(student: Student): void {
    this.selectedStudent = student;
  }

  getStudents(): void {
    this.studentService.getStudents()
      .then((students: Student[]) => this.students = students);
  }
}
