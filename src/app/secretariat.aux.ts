import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import {Secretariat} from './secretariat';
import {Department} from './department';
import {DepartmentService} from './department.service';

@Component({
  selector: 'secretariat.component',
  template: require('./secretariat.component.html')
})

export class SecretariatComponent implements OnInit {
  secretariat: Secretariat;
  department: Department;

  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let departmentId = +params['departmentId'];
      let secretariatId = +params['secretariatId'];
      this.departmentService.getDepartment(departmentId)
      .then(department => this.department = department);
      this.secretariat = this.department.secretariats.find(secretariat => secretariat.id === secretariatId);
    });
  }
}
