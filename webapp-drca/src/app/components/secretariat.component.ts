import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';

import {SecretariatService} from '../services/secretariat.service';
import {DisciplineService} from '../services/discipline.service';
import {StudentService} from '../services/student.service';
import {DepartmentService} from '../services/department.service';

@Component({
  selector: 'fountain-secretariat',
  template: require('../templates/secretariat.component.html')
})

export class SecretariatComponent implements OnInit {
  text: string;
  secretariat: any;
  disciplines: any[];
  students: any[];
  department: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private secretariatService: SecretariatService,
    private disciplineService: DisciplineService,
    private departmentService: DepartmentService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      console.log(params);
      let depName = params['depName'];
      let id = params['id'];

      this.department = depName;

      this.secretariatService.getSecretariat(id).then(sec => {
        console.log(sec);
        this.secretariat = sec;
      });

      this.disciplineService.getAvailableDisciplinesForSecretariatWithId(id).then(discs => {
        console.log(discs);
        this.disciplines = discs;
      });

      this.studentService.getStudentsForSecretaryWithId(id).then(students => {
        console.log(students);
        this.students = students;
      });

    })
  }

  gotoDiscipline(disciplineId: number): void {
    this.router.navigate(['discipline/:id', {id: disciplineId }]);
  }

  gotoStudent(studentId: number): void {
    this.router.navigate(['student/:id', {id: studentId }]);
  }

}
