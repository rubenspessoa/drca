import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';

import {StudentService} from '../services/student.service';
import {Student} from '../services/student';

import {DisciplineService} from '../services/discipline.service';
import {Discipline} from '../services/discipline';

import {StudentAttendsDiscipline} from '../services/studentAttendsDiscipline';
import {StudentAttendsDisciplineService} from '../services/studentAttendsDiscipline.service';

@Component({
  selector: 'fountain-student',
  template: require('../templates/student.component.html')
})

export class StudentComponent implements OnInit {

  public text: string;
  //public selectedStudent: Student;
  public student: Student;
  public studiscs: StudentAttendsDiscipline[];
  public disciplines = [];
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private studiscService: StudentAttendsDisciplineService,
    private disciplineService: DisciplineService
  ) {
    this.text = 'Comprovante de Matrícula';
  }

  ngOnInit(): void {
    this.route.params.forEach(
      (params: Params) => {
        let id = +params['id'];
        /*
        this.getStudent(id)
          .then(
            student => this.getStudiscs(this.student.id)
              .then(studiscs => this.getDisciplines())
          );
          */
      }
    )
  }

  /*
  getStudent(id: number): Promise<Student> {
    return this.studentService.getStudent(id)
      .then(student => this.student = student);
  }


  getStudiscs(studentId: number): Promise<StudentAttendsDiscipline[]> {
    return this.studiscService.getDisciplinesBy(studentId)
      .then(studiscs => this.studiscs = studiscs);
  }

  getDisciplines(): void {
    this.studiscs.forEach(
      studisc => this.getDiscipline(studisc.disciplineId)
    );
  }

  getDiscipline(id: number): void {
    this.disciplineService.getDiscipline(id)
      .then(discipline => this.disciplines.push(discipline));
  }*/
}
