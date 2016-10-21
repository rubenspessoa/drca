import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ip } from './rest';

@Injectable()
export class SecretariatService {

  constructor(
    private http: Http
  ) {}

  private departmentsUrl = 'http://' + ip + ':8080/fetchDepartments';
  private fetchSecretariatWithId = 'http://' + ip + ':8080/fetchSecretaryWithId?id=';  // URL to web api


  getSecretariat(id: string): Promise<any> {
    let url = this.fetchSecretariatWithId + id;
    console.log(url);
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().result);
  }

}
