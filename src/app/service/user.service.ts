import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../dto/user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(regUser: User): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8080/register', regUser);
  }

  login(regUser: User): Observable<any> {
    return this.http.post<any>('http://localhost:8080/authenticate', regUser)
      .pipe(
        map(userData => {
          localStorage.setItem('username', regUser.username);
          const tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    const user = localStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    localStorage.removeItem('username');
  }
}
