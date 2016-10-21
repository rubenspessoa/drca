import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ip } from './rest';

import { Discipline } from './discipline';
import { DISCIPLINES } from './mock-disciplines';

@Injectable()
export class DisciplineService {

  private fetchClassesForDepartmentWithId = 'http://' + ip + ':8080/fetchClassesForDepartmentWithId?id=';  // URL to web api

  constructor(
    private http: Http
  ) {}

  getDisciplines(): Promise<Discipline[]> {
    return Promise.resolve(DISCIPLINES);
  }

  getDisciplinesForDepartmentWithId(id: string): Promise<any> {
    let url = this.fetchClassesForDepartmentWithId + id;
    console.log(url);
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().result);
  }

  getDisciplinesBy(secretariatId: number): Promise<Discipline[]> {
    return this.getDisciplines()
      .then(disciplines => disciplines.filter(discipline => discipline.secretariatId === secretariatId));
  }

  getDiscipline(id: number): Promise<Discipline> {
    return this.getDisciplines()
      .then(discipline => discipline.find(discipline => discipline.id === id));
  }
}
