
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor (
    private http: Http
  ) {}

  getUser() {
    let header = new Headers();
    header.append('auth', '');
    return this.http.get(`assets/data/dataclient.json`, {headers : header} )
    .map((res:Response) => res.json());
  }

 postUser(employee: any) {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post('https://reqres.in/api/users', employee, {headers: header}).
    map(res => res.json());
  }
 

}