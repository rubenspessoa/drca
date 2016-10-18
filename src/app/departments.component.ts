import {Component} from '@angular/core';
import { Router } from '@angular/router';

import {Department} from './services/department';
import {DEPARTMENTS} from './services/mock-departments';

@Component({
  selector: 'fountain-departments',
  template: require('./templates/departments.component.html')
})

export class DepartmentsComponent {
  public text: string;
  selectedDepartment: Department;
  departments = DEPARTMENTS;

  constructor(
    private router: Router) {
    this.text = 'Departamentos';
  }

  onSelect(department: Department): void {
    this.selectedDepartment = department;
  }

  gotoSecretariat(departmentId: number, secretariatId: number): void {
    this.router.navigate(['departments/:id1/:id2', {id1: departmentId, id2: secretariatId}]);
  }
}
