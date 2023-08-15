import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) { }

  get isLoggedIn(): any {
    return this.loggedIn$.asObservable();
  }

  getLoginData() {
    return this.http.get<any>('http://localhost:3000/signedUpUsers');
  }

}
