import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';

import {StudentService} from '../services/student.service';
import {DisciplineService} from '../services/discipline.service';

@Component({
  selector: 'fountain-student',
  template: require('../templates/student.component.html')
})

export class StudentComponent implements OnInit {

  public text: string;
  public student: any;
  public disciplines = [];
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private disciplineService: DisciplineService
  ) {
    this.text = 'Comprovante de Matrícula';
  }

  ngOnInit(): void {
    this.route.params.forEach(
      (params: Params) => {
        let id = params['id'];

        this.studentService.getStudent(id).then(student => {
          this.student = student;
          console.log(student);


        })
        this.disciplineService.getDisciplinesForStudentWithId(id).then(disciplines => {
          this.disciplines = disciplines;
          console.log(disciplines);
        });
      }
    );
  }
}
