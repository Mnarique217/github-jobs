import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class FirebaseJobService {

  databaseName = '';
  
  constructor(public db: AngularFireDatabase, public auth: AuthService) {
  }

  getAllJobs() {
    return new Promise<any>((resolve, reject) => {
      this.auth.CurrentUser().then( (user: firebase.User) =>{
        this.databaseName = `users/${user.uid}/savedJobs`;
        const requestRef = this.db.database.ref(`${this.databaseName}/`);
        requestRef
          .once('value')
          .then((result) => {
            if (result) {
              resolve(result.val());
            }
            else
              reject(false);
          });//end then
        })
      
    });
  }


  saveJob(job) {
    return new Promise((resolve, reject) => {
      this.auth.CurrentUser().then((user: firebase.User) => {
        if (user != null) {
          this.db.object(`/users/${user.uid}/savedJobs/${job.id}`).update(job).then(
            (evt) => {
              resolve(true);
            },
            (err) => {
              reject({status:'error'});
            }
          );
        }else{
          reject({status:'login'});
        }
      });//current user

    });//promise

  }

  deleteJob(id, userKey = 'mq') {
    return new Promise((resolve, reject) => {
      this.auth.CurrentUser().then((user: firebase.User) => {
        if (user != null) {
          this.db.object(`/users/${user.uid}/savedJobs/${id}`).remove().then(
            (evt) => {
              resolve(true);
            },
            (err) => {
              reject({status:'error'});
            }
          );
        }else{
          reject({status:'login'});
        }
      });//current user

    });//promise
  }

  getNewJobKey() {
    return this.db.database.ref().child(`${this.databaseName}`).push().key;
  }

}