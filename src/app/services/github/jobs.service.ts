import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//https://jobs.github.com/positions.json?search=node
export class JobsService {
  totalAngularPackages;
  api = 'http://192.168.1.163:3000/positions';

  constructor(private http: HttpClient) { }

  getOptions() {
    return {
      description:'',
      page:'',
      location:'',
      long:'',
      lat:'',
      full_time:'',
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

    return new Promise((resolve, reject) => {
      let apiURL = this.api;
      this.http
        .get<any>(`${apiURL}?search=${options.search}&description=${options.description}&location=${options.location}&full_time=${options.full_time}`)
        .toPromise()
        .then((res: any) => {
          console.log(res);
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