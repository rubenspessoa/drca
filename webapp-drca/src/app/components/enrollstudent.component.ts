import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import {StudentService} from '../services/student.service';
import {SecretariatService} from '../services/secretariat.service';
import {DisciplineService} from '../services/discipline.service';
import {DepartmentService} from '../services/department.service';

@Component({
  selector: 'fountain-enrollstudent',
  template: require('../templates/enrollstudent.component.html')
})

export class EnrollStudentComponent implements OnInit {
  public text: string;
  selectedDiscipline: any;
  disciplines = [];
  student: any;
  department: any;
  enrolled: boolean;
  enrollResult: Object;

  constructor(
    private disciplineService: DisciplineService,
    private studentService: StudentService,
    private secretariatService: SecretariatService,
    private departmentService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.enrollResult = {"content": ""};
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

  getStudent(id: string): Promise<any> {
    return this.studentService.getStudent(id)
      .then(student => {
        this.student = student;
      });
  }

  enrollStudentWithIdToDisciplineWithId(id: string, disciplineId: string): Promise<any> {
    return this.disciplineService.enrollStudentWithIdToDisciplineWithId(id, disciplineId);
  }

  onSelect(discipline: any): void {
    this.selectedDiscipline = discipline;
    this.enrollResult = {"content": ""};
  }

  enroll(): void {
    this.enrollResult = {"content": "processando..."};
    this.enrollStudentWithIdToDisciplineWithId(this.student.objectId, this.selectedDiscipline.objectId).then(result => {
      this.enrollResult = {"content": result};
    });
  }
}
