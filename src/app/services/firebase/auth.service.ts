import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    // this.userData = angularFireAuthState;
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
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .signOut();
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