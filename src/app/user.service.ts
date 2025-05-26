import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  registerUser(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  private userNameSubject = new BehaviorSubject<User>({
    name: 'Guest',
    email: '',
    age: '',
  });

  userName$ = this.userNameSubject.asObservable();

  updateUser(user: User) {
    this.userNameSubject.next(user);
  }

  getUser(){
    return {
      name: 'Abrar Haque',
      email: 'abm.abrar@email.com',
      age: '27'
    }
  }
  
}
