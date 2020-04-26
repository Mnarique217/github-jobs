import { Component, OnInit } from '@angular/core';
import { FirebaseJobService } from 'src/app/Services/firebase/firebaseJobs.service';

@Component({
  selector: 'app-saved-jobs',
  templateUrl: './saved-jobs.component.html',
  styleUrls: ['./saved-jobs.component.sass']
})
export class SavedJobsComponent implements OnInit {

  savedJobs: any = [];
  constructor(public jobsService: FirebaseJobService) { }

  ngOnInit(): void {
    this.jobsService.getAllJobs().then(data => {
      console.log(data);
      console.log(this.savedJobs);
      for (const iterator in data) {
        this.savedJobs.push(data[iterator]);
      }
    });
    
  }

  
}
