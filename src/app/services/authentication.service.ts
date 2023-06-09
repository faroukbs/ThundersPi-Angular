import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8181/api/authentication';
  private baseupdateurl = 'http://localhost:8181/api/user';

  storageUserAsStr: any = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser') || '{}')
    : null;

  public currentUser!: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
    let storageUser;
    const storageUserAsStr = localStorage.getItem('currentUser');
    if (storageUserAsStr) {
      storageUser = JSON.parse(storageUserAsStr);
    }
    this.currentUserSubject = new BehaviorSubject<User>(storageUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/sign-in', user).pipe(
      map((response) => {
        if (response) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.currentUserSubject.next(response);
        }
        return response;
      })
    );
  }

  register(user: User): Observable<any> {
    return this.http.post(this.baseupdateurl + '/register', user);
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(new User());
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseupdateurl + '/users');
  }

  updateUser(user: User): Observable<any> {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.storageUserAsStr.token}`,
      },
    };
    return this.http.put(this.baseupdateurl + '/update', user, config);
  }
  delete(id:number): any{
    return this.http.delete(`${this.baseupdateurl}/delete/${id}`);
  }

}

