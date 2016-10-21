import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import {StudentService} from '../services/student.service';
import {Student} from '../services/student';

import {SecretariatService} from '../services/secretariat.service';
import {Secretariat} from '../services/secretariat';

import {DisciplineService} from '../services/discipline.service';
import {Discipline} from '../services/discipline';

import {DepartmentService} from '../services/department.service';
import {Department} from '../services/department';

import {StudentAttendsDisciplineService} from '../services/studentAttendsDiscipline.service';

@Component({
  selector: 'fountain-enrollstudent',
  template: require('../templates/enrollstudent.component.html')
})

export class EnrollStudentComponent implements OnInit {
  public text: string;
  selectedDiscipline: Discipline;
  disciplines = [];
  secretariat: Secretariat;
  departmentSecretariats: Secretariat[];
  student: any;
  department: any;
  enrolled: boolean;

  constructor(
    private disciplineService: DisciplineService,
    private studentService: StudentService,
    private secretariatService: SecretariatService,
    private departmentService: DepartmentService,
    private studiscService: StudentAttendsDisciplineService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.params.forEach(params => {
      let id = params['id'];
      this.getStudent(id).then(student => {
          this.getDepartmentForStudentWithId(id).then(department => {
            console.log(this.department);
            this.getDisciplinesForDepartmentWithId(this.department.objectId);
          });
      });
    });
  }

  getDisciplines(secretariatId: number): void {
    this.disciplineService.getDisciplinesBy(secretariatId)
      .then(disciplines => {
        disciplines.forEach(
          discipline => {
            this.disciplines.push(discipline);
          }
        );
      });
  }

  getDepartmentForStudentWithId(id: string): Promise<any> {
    return this.departmentService.getDepartmentForStudentWithId(id).then(department => {
      this.department = department;
    });
  }

  getDisciplinesForDepartmentWithId(id: string): Promise<any> {
    return this.disciplineService.getDisciplinesForDepartmentWithId(id).then(disciplines => {
      this.disciplines = disciplines;
    });
  }

  getInfoAboutDiscipline(): void {
    this.studiscService.getDisciplinesBy(this.student.id).then(
      studiscs => {
          if (studiscs.find(studisc => studisc.disciplineId === this.selectedDiscipline.id)) {
            this.enrolled = true;
          } else {
            this.enrolled = false;
          };
        }
      );
    }


  getStudent(id: string): Promise<any> {
    return this.studentService.getStudent(id)
      .then(student => {
        this.student = student;
      });
  }

  getSecretariat(id: number): Promise<Secretariat> {
    return this.secretariatService.getSecretariat(id)
      .then(secretariat => this.secretariat = secretariat);
  }

  getSecretariatsFrom(departmentId: number): Promise<Secretariat[]> {
    return this.secretariatService.getSecretariatBy(departmentId)
      .then(secretariats => this.departmentSecretariats = secretariats);
  }

  getDepartment(id: number): Promise<Department> {
    return this.departmentService.getDepartment(id)
      .then(department => this.department = department);
  }

  onSelect(discipline: Discipline): void {
    this.selectedDiscipline = discipline;
    this.getInfoAboutDiscipline();
  }
}
