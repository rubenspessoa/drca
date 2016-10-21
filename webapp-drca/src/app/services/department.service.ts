import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ip } from './rest';

@Injectable()
export class DepartmentService {

  constructor(
    private http: Http
  ) {}

  private departmentsUrl = 'http://' + ip + ':8080/fetchDepartments';
  private fetchDepartmentForStudentWithIdUrl = 'http://' + ip + ':8080/fetchDepartmentForStudentWithId?id=';  // URL to web api

  getDepartmentForStudentWithId(id: string): Promise<any> {
    let url = this.fetchDepartmentForStudentWithIdUrl + id;
    console.log(url);
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().result);
  }

  getDepartments(): Promise<any[]> {
    return this.http.get(this.departmentsUrl)
               .toPromise()
               .then(response => response.json().result);
  }
}
