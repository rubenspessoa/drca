import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {DisciplineService} from '../services/discipline.service';
import {Discipline} from '../services/discipline';

import {StudentAttendsDiscipline} from '../services/studentAttendsDiscipline';
import {StudentAttendsDisciplineService} from '../services/studentAttendsDiscipline.service';

import {ProfessorService} from '../services/professor.service';
import {Professor} from '../services/professor';

import {StudentService} from '../services/student.service';
import {Student} from '../services/student';

@Component({
  selector: 'fountain-discipline',
  template: require('../templates/discipline.component.html')
})

export class DisciplineComponent implements OnInit {
  discipline: Discipline;
  professor: Professor;
  preRequisites: Discipline[];
  studiscs = [];
  students = [];
  public text: string;

  constructor(
    private route: ActivatedRoute,
    private disciplineService: DisciplineService,
    private professorService: ProfessorService,
    private studiscService: StudentAttendsDisciplineService,
    private studentService: StudentService
  ) {
    this.text = 'Pauta da Disciplina: ';
  }

  ngOnInit(): void {
    this.route.params.forEach(
      (params: Params) => {
        let id = +params['id'];
        this.getDiscipline(id)
          .then(
            discipline => this.getStuDiscs(this.discipline.id)
              .then(studiscs => this.getStudents())
          );
      }
    );
  }

  getDiscipline(id: number): Promise<Discipline> {
      return this.disciplineService.getDiscipline(id)
        .then(discipline => this.discipline = discipline);
  }

  getStuDiscs(disciplineId: number): Promise<StudentAttendsDiscipline[]> {
    return this.studiscService.getStudentsBy(disciplineId)
      .then(studiscs => this.studiscs = studiscs);
  }

  getStudents(): void {
    this.studiscs.forEach(
      studisc => this.getStudent(studisc.studentId));
  }

  getStudent(id: number): void {
    this.studentService.getStudent(id)
    .then(student => this.students.push(student));
  }
}
