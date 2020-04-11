import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//https://jobs.github.com/positions.json?search=node
export class JobsService {
  totalAngularPackages;
  api = 'http://10.240.78.197:3000/positions';

  constructor(private http: HttpClient) { }

  /*
    Output: returns an array with the first 50 positions.
  */
  init() {
    return new Promise((resolve, reject) => {
      const apiURL = this.api;
      this.http
        .get<any>(apiURL)
        .toPromise()
        .then((res: any) => {
          resolve(res);
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
  }

}