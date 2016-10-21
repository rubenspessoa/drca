import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ip } from './rest';

@Injectable()
export class DisciplineService {

  private fetchClassesForDepartmentWithId = 'http://' + ip + ':8080/fetchClassesForDepartmentWithId?id=';  // URL to web api
  private fetchAvailableDisciplinesForSecretariatWithId = 'http://' + ip + ':8080/fetchAvailableClassesForSecretaryWithId?id=';  // URL to web api
  private signupStudentWithIdForClassWithId = 'http://' + ip + ':8080/signupStudentWithIdForClassWithId?id=';  // URL to web api
  private fetchClassWithIdUrl = 'http://' + ip + ':8080/fetchClassWithId?id=';  // URL to web api
  private fetchClassesByIdsUrl = 'http://' + ip + ':8080/fetchClassesByIds?id=';  // URL to web api

  constructor(
    private http: Http
  ) {}

  getDisciplinesForDepartmentWithId(id: string): Promise<any> {
    let url = this.fetchClassesForDepartmentWithId + id;
    console.log(url);
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().result);
  }

  getAvailableDisciplinesForSecretariatWithId(id: string): Promise<any[]> {
    let url = this.fetchAvailableDisciplinesForSecretariatWithId + id;
    console.log(url);
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().result);
  }

  enrollStudentWithIdToDisciplineWithId(id: string, disciplineId: string): Promise<any> {
    let url = this.signupStudentWithIdForClassWithId + id + '&classId=' + disciplineId;
    console.log(url);
    return this.http.get(url)
               .toPromise()
               .then(response => {
                 console.log(response.json());
                 if(typeof response.json().result != 'undefined') {
                   console.log('did follow result path');
                   return response.json().result;
                 }
                 else {
                   console.log('did follow error path');
                   return response.json().error;
                 }
               });
  }

  getDiscipline(id: string): Promise<any> {
    let url = this.fetchClassWithIdUrl + id;
    console.log(url);
    return this.http.get(url)
            .toPromise()
            .then(response => response.json().result);
  }

  // TODO

  getDisciplinesForStudentWithId(id: string): Promise<any[]> {
    let url = 'http://' + ip + ':8080/fetchClassesForStudentWithId?id=' + id;
    console.log(url);

    return this.http.get(url)
            .toPromise()
            .then(response => response.json().result);
  }
}
