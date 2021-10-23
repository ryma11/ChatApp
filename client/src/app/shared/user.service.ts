import { Injectable } from '@angular/core';
import {User} from './user.model';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  SelectedUser:User={
    userName: '',
   userSurname:'',
   email:'',
   Password:'',
   userGender:'',
  }
  constructor(private http:HttpClient) { }

    postUser(user:User){
      // it returns an observable
     return this.http.post(environment.apiBaseUrl+'/register',user)
    }
  
}
