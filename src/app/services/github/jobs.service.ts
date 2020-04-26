import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//https://jobs.github.com/positions.json?search=node
export class JobsService {
  totalAngularPackages;
  api = 'http://localhost:3000/positions';

  constructor(private http: HttpClient) { }

  getOptions() {
    return {
      description:'',
      page:1,
      location:'',
      long:'',
      lat:'',
      full_time: false,
      search:''
    }
  }
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


  filter(options) {

    console.log('service page contains');
    console.log(options.full_time);
    return new Promise((resolve, reject) => {
      let apiURL = this.api;
      this.http
        .get<any>(`${apiURL}?search=${options.search}&description=${options.description}&location=${options.location}&full_time=${options.full_time}&page=${options.page}`)
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