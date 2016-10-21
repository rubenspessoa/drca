import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Department } from './department';
import { DEPARTMENTS } from './mock-departments';

import { ip } from './rest';

@Injectable()
export class DepartmentService {

  constructor(
    private http: Http
  ) {}

  private studentsUrl = 'http://' + ip + ':8080/fetchStudents';
  private fetchDepartmentForStudentWithIdUrl = 'http://' + ip + ':8080/fetchDepartmentForStudentWithId?id=';  // URL to web api

  getDepartmentForStudentWithId(id: string): Promise<any> {
    let url = this.fetchDepartmentForStudentWithIdUrl + id;
    console.log(url);
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().result);
  }

  getDepartments(): Promise<Department[]> {
    return Promise.resolve(DEPARTMENTS);
  }

  getDepartment(id: number): Promise<Department> {
    return this.getDepartments()
      .then(departments => departments.find(department => department.id === id));
  }
}
