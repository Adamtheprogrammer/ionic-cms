import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User }from '../../models/user/user';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  getUsers(): void{
    console.log('all users');
  }


  getUser(): void{
    console.log('one user');
  }

  createUser(): void{
    console.log('create');
  }


  editUser(): void{
    console.log('edit');
  }

  deleteUser(): void{
    console.log('delete');
  }






}
