import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';

import { User }from '../../models/user/user';

const httpOptions = ({
  headers:new HttpHeaders({'Content-Type': 'application/json'})
});

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class UsersProvider {

  private url:string = 'http://localhost:3000/api/users';

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }


  getUser(id:string): Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`);
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(this.url, user, httpOptions);
  }


  editUser(): void{
    console.log('edit');
  }

  deleteUser(): void{
    console.log('delete');
  }


}
