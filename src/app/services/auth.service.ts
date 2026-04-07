import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean = false;
  //authSubject: Subject<boolean>=new Subject<boolean>();
  authSubject: BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  
  constructor() { }
  //Subject as observable
  emitAuthSubject(){
    this.authSubject.next(this.isAuthenticated())
   // console.log("isAuth"+this.isAuth)
  }
  isAuthenticated(): boolean {
    return this.isAuth;
  }
  signIn() {
    this.isAuth = true;
    this.emitAuthSubject();
  }
  signOut() {
    this.isAuth = false;
     this.emitAuthSubject();
  }

}
