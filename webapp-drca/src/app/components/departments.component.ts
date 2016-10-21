import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {DepartmentService} from '../services/department.service';
import {SecretariatService} from '../services/secretariat.service';

@Component({
  selector: 'fountain-departments',
  template: require('../templates/departments.component.html')
})

export class DepartmentsComponent implements OnInit {
  public text: string;
  selectedDepartment: any;
  departments: any[];
  secretariats: any[];

  constructor(
    private router: Router,
    private departmentService: DepartmentService,
    private secretariatService: SecretariatService
  ) {
    this.text = 'Departamentos';
  }

  ngOnInit(): void {
    this.getDepartments();
  }

  onSelect(department: any): void {
    console.log('entrou');
    this.selectedDepartment = department;
    //delete this.secretariats;
    this.getSecretariats();
  }

  gotoSecretariat(departmentName: string, secretariatId: string): void {
    this.router.navigate(['departments/:depName/:id', {depName: departmentName, id: secretariatId}]);
  }

  getDepartments(): void {
    this.departmentService.getDepartments()
      .then(departments => this.departments = departments);
  }

  getSecretariats(): void {
    console.log(typeof this.selectedDepartment.gradSecretary);
    if(typeof this.selectedDepartment.gradSecretary == 'object') {
      this.secretariatService.getSecretariat(this.selectedDepartment.gradSecretary.objectId).then(grad => {
        if(typeof this.selectedDepartment.docSecretary == 'object') {
          this.secretariatService.getSecretariat(this.selectedDepartment.docSecretary.objectId).then(doc => {
            console.log('before set');
            this.secretariats = [grad, doc];
            console.log(this.secretariats);
          });
        }
        else {
          console.log('before set');
          this.secretariats = [grad];
          console.log(this.secretariats);
        }
      });
    }
    else if(typeof this.selectedDepartment.docSecretary == 'object') {
      this.secretariatService.getSecretariat(this.selectedDepartment.docSecretary.objectId).then(doc => {
        console.log('before set');
        this.secretariats = [doc];
        console.log(this.secretariats);
      });
    }
    else {
      console.log('no secretary found');
      this.secretariats = [];
      console.log(this.secretariats);
    }
  }
}
