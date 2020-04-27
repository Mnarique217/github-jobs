import { Component, OnInit } from '@angular/core';
import { FirebaseJobService } from 'src/app/services/firebase/firebaseJobs.service';

@Component({
  selector: 'app-saved-jobs',
  templateUrl: './saved-jobs.component.html',
  styleUrls: ['./saved-jobs.component.sass']
})
export class SavedJobsComponent implements OnInit {

  showProgress : boolean;
  savedJobs: any = [];
  constructor(public jobService: FirebaseJobService) { }

  ngOnInit(): void {
    this.jobService.getAllJobs().then(data => {
      console.log(data);
      console.log(this.savedJobs);
      for (const iterator in data) {
        this.savedJobs.push(data[iterator]);
      }
    });
  }
  
  removeJob(id){
    this.savedJobs = this.savedJobs.filter(x=>{
      return x.id !== id;
    })
  }
}
