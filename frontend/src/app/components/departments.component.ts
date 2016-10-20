import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Department} from '../services/department';
import {DepartmentService} from '../services/department.service';

@Component({
  selector: 'fountain-departments',
  template: require('../templates/departments.component.html')
})

export class DepartmentsComponent implements OnInit {
  public text: string;
  selectedDepartment: Department;
  departments: Department[];

  constructor(
    private router: Router,
    private departmentService: DepartmentService
  ) {
    this.text = 'Departamentos';
  }

  ngOnInit(): void {
    this.getDepartments();
  }

  onSelect(department: Department): void {
    this.selectedDepartment = department;
  }

  gotoSecretariat(departmentId: number, secretariatId: number): void {
    this.router.navigate(['departments/:id1/:id2', {id1: departmentId, id2: secretariatId}]);
  }

  getDepartments(): void {
    this.departmentService.getDepartments()
      .then((departments: Department[]) => this.departments = departments);
  }
}
