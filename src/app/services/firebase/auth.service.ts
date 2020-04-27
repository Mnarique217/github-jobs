import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
  }

  /* Sign up */
  SignUp(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.angularFireAuth
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    return this.angularFireAuth
      .signInWithEmailAndPassword(email, password);
  }

  /* Sign out */
  SignOut() {
    return this.angularFireAuth.signOut();
  }


  CurrentUser() {
    return new Promise((resolve, reject) => {
      this.angularFireAuth.onAuthStateChanged(function (user) {
        if (user) {
          resolve(user);
        } else {
          reject(null);
        }
      });
    });
  }
}


@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _authService: AuthService) { }

  async canActivate() {
    var result = false;
    await this._authService.CurrentUser().then(user => {
      
      if (user !== null) {
        // all ok, proceed navigation to routed component
        result = true;console.log(user)
      }
      else {
        // redirect to the homepage
        this._router.navigate(['/home']);
        // abort current navigation
        result = false;
      }
    })
    return result;
  }
}