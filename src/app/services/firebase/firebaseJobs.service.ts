import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({ providedIn: 'root' })
export class FirebaseJobService {

  databaseName = 'users/mq/savedJobs';
  constructor(public db: AngularFireDatabase) {
  }

  getAllJobs() {
    return new Promise<any>((resolve, reject) => {
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
    });
  }


  saveJob(job, userKey = 'mq') {

    return new Promise((resolve, reject) => {
      this.db.object(`/users/${userKey}/savedJobs/${job.id}`).update(job).then(
        (evt) => {
          resolve(true);
        },
        (err) => {
          reject(false);
        }
      );

    });
  }

  deleteJob(id, userKey = 'mq') {

    return new Promise((resolve, reject) => {
      this.db.object(`/users/${userKey}/savedJobs/${id}`).remove().then(
        (evt) => {
          resolve(true);
        },
        (err) => {
          reject(false);
        }
      );
    });
  }

  getNewJobKey() {
    return this.db.database.ref().child(`${this.databaseName}`).push().key;
  }

}