import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Student } from './student';
import { ip } from './rest';

@Injectable()
export class StudentService {

  private studentsUrl = 'http://' + ip + ':8080/fetchStudents';
  private studentUrl = 'http://' + ip + ':8080/fetchStudentWithId?id=';  // URL to web api

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

  getStudentsBy(secretariatId: number): Promise<Student[]> {
    return this.getStudents()
      .then(students => students.filter(student => student.secretariatId === secretariatId));
  }

  getStudents(): Promise<any> {
    return this.http.get(this.studentsUrl)
               .toPromise()
               .then(response => response.json().result);
  }

}
