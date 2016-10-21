import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {DisciplineService} from '../services/discipline.service';
import {ProfessorService} from '../services/professor.service';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'fountain-discipline',
  template: require('../templates/discipline.component.html')
})

export class DisciplineComponent implements OnInit {
  discipline: any;
  professor: any;
  preRequisites: any[];
  studiscs = [];
  students = [];
  public text: string;

  constructor(
    private route: ActivatedRoute,
    private disciplineService: DisciplineService,
    private professorService: ProfessorService,
    private studentService: StudentService
  ) {
    this.text = 'Pauta da Disciplina: ';
  }

  ngOnInit(): void {
    this.route.params.forEach(
      (params: Params) => {
        let id = params['id'];
        console.log(id);

        this.disciplineService.getDiscipline(id).then( disc => {
          this.discipline = disc;
          console.log(disc);
          if(typeof disc.requiredClasses != 'undefined') {
            console.log(disc.requiredClasses);
            this.preRequisites = [];
            console.log(disc.requiredClasses);
            disc.requiredClasses.forEach(
              preRequisite => {
                this.disciplineService.getDiscipline(preRequisite).then(id => {
                  this.preRequisites.push(id);
                });
              }
            );
          }

          this.professorService.getProfessor(disc.teacher.objectId).then(professor => {
            this.professor = professor;
            console.log(this.professor);
          });

          this.studentService.getStudentsForClassWithId(disc.objectId).then(students => {
            this.students = students;
            console.log(students);
          });
        });

      }
    );
  }
}
