import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ip } from './rest';

@Injectable()
export class StudentService {

  private studentsUrl = 'http://' + ip + ':8080/fetchStudents';
  private studentUrl = 'http://' + ip + ':8080/fetchStudentWithId?id=';  // URL to web api
  private fetchStudentsForSecretaryWithIdUrl = 'http://' + ip + ':8080/fetchStudentsForSecretaryWithId?id=';
  private fetchStudentsForClassWithIdUrl = 'http://' + ip + ':8080/fetchStudentsForClassWithId?id=';

  constructor(
    private http: Http
  ) {}

  getStudent(id: string): Promise<any> {
    let url = this.studentUrl + id;
    console.log(url);
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().result);
  }

  getStudentsForSecretaryWithId(id: string): Promise<any[]> {
    let url = this.fetchStudentsForSecretaryWithIdUrl + id;
    console.log(url);
    return this.http.get(url).toPromise().then(response => response.json().result);
  }

  getStudents(): Promise<any> {
    return this.http.get(this.studentsUrl)
               .toPromise()
               .then(response => response.json().result);
  }

  getStudentsForClassWithId(id: string): Promise<any[]> {
    let url = this.fetchStudentsForClassWithIdUrl + id;
    console.log(url);
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().result);
  }

}
