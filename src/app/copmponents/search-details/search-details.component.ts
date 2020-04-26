import { Component, OnInit, Input } from '@angular/core';
import { JobService } from 'src/app/services/firebase/jobs.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss']
})
export class SearchDetailsComponent implements OnInit {

  @Input('job') job;

  constructor(public jobService: JobService) { }

  ngOnInit(): void {

  }

  save() {
    this.jobService.saveJob(this.job,this.jobService.getNewJobKey()).then(data => {
      console.log(data);
    });
  }
  apply(uri: string) {
    let index = uri.indexOf('"');
    uri = uri.substring(index + 1, uri.length);
    index = uri.indexOf('"');
    uri = uri.substring(0, index);
    window.open(uri, "_blank");
  }

}
