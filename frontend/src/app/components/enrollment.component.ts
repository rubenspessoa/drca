import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Student} from '../services/student';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'fountain-enrollment',
  template: require('../templates/enrollment.component.html')
})

export class EnrollmentComponent implements OnInit {
  public text: string;
  selectedStudent: Student;
  students: Student[];

  constructor(
    private router: Router,
    private studentService: StudentService
  ) {
    this.text = 'Estudantes';
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
      .then((students: Student[]) => this.students = students);
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

  gotoEnrollStudent(studentid: number): void {
    this.router.navigate(['enroll-student/:id', {id: studentid}]);
  }
}
