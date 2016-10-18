import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';

import {Secretariat} from './services/secretariat';
import {SecretariatService} from './services/secretariat.service';
import {Discipline} from './services/discipline';
import {DisciplineService} from './services/discipline.service';
import {Student} from './services/student';
import {StudentService} from './services/student.service';
import {Department} from './services/department';
import {DepartmentService} from './services/department.service';

@Component({
  selector: 'fountain-secretariat',
  template: require('./templates/secretariat.component.html')
})

export class SecretariatComponent implements OnInit {
  text: string;
  secretariat: Secretariat;
  disciplines: Discipline[];
  students: Student[];
  department: Department;

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
      let id1 = +params['id1'];
      let id2 = +params['id2'];
      this.getDepartment(id1);
      this.getSecretariat(id2);
    });
    // Get discipline and students from a secretariat
    this.getDisciplines();
    this.getStudents();
    // must get department too
  }

  getDisciplines(): void {
    this.disciplineService.getDisciplines()
      .then((disciplines: Discipline[]) => this.disciplines = disciplines);
  }

  getStudents(): void {
    this.studentService.getStudents()
      .then((students: Student[]) => this.students = students);
  }

  getSecretariat(id: number): void {
    this.secretariatService.getSecretariat(id)
      .then(secretariat => this.secretariat = secretariat);
  }

  getDepartment(id: number): void {
    this.departmentService.getDepartment(id)
      .then(department => this.department = department);
  }

  gotoDiscipline(disciplineId: number): void {
    this.router.navigate(['discipline/:id', {id: disciplineId }]);
  }

  gotoStudent(studentId: number): void {
    this.router.navigate(['student/:id', {id: studentId }]);
  }
}
