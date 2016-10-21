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
  students: Object[];

  constructor(
    private router: Router,
    private studentService: StudentService
  ) {
    this.text = 'Estudantes';
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): Promise<any> {
    return this.studentService.getStudents()
      .then(response => {
        console.log(response);
        this.students = response;
      });
  }

  gotoEnrollStudent(studentid: string): void {
    this.router.navigate(['enroll-student/:id', {id: studentid}]);
  }
}
