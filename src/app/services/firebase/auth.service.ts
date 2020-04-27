import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/services/toast/toast.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth,public toastService: ToastService) {
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
        this.showCustomToast('Welcome ' + email, 7000, 'bg-success color-white');
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
        this.showCustomToast('User not found', 7000, 'bg-danger color-white');
      });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .signOut();
  }


<<<<<<< HEAD

  showCustomToast(msg, time, color) {
    this.toastService.show(msg, {
      classname: color,
      delay: time,
      autohide: true
    });
  }
}

=======
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
>>>>>>> df9d3694186028ef2166f9d2e90b667d99a2d0c4
