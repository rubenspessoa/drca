import {Component} from '@angular/core';
import {Department} from './department';
import { Router } from '@angular/router';

const DEPARTMENTS : Department[] = [
  {
    id: 1,
    name: 'Instituto de Computação',
    secretariats: [
      {
        id: 10,
        name:'Graduação'
      },
      {
        id: 11,
        name:'Pós-graduação'
      }
    ]},
  {id: 2, name: 'Instituto de Matemática', secretariats: [
    {
      id: 12,
      name:'Graduação'
    }
  ]},
  {id: 3, name: 'Instituto de Física', secretariats: [
    {
      id: 13,
      name:'Graduação'
    },
    {
      id: 14,
      name:'Pós-graduação'
    }
  ]},
  {id: 4, name: 'Centro de Educação', secretariats: [
    {
      id: 15,
      name:'Graduação'
    },
    {
      id: 16,
      name:'Pós-graduação'
    }
  ]},
  {id: 5, name: 'Centro de Saúde', secretariats: [
    {
      id: 17,
      name:'Graduação'
    }
  ]}
];

@Component({
  selector: 'fountain-departments',
  template: require('./departments.component.html')
})

export class DepartmentsComponent {
  public text: string;
  selectedDepartment: Department;
  departments = DEPARTMENTS;

  constructor(private router: Router) {
    this.text = 'Departamentos';
  }

  onSelect(department: Department): void {
    this.selectedDepartment = department;
  }

  gotoSecretariat(departmentId: number, secretariatId: number): void {
    this.router.navigate(['/:departmentId/:secretariatId', {departmentId: departmentId, secretariatId: secretariatId}]);
  }
}
