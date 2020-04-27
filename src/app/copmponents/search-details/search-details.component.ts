import { Component, OnInit, Input } from '@angular/core';
import { FirebaseJobService } from 'src/app/services/firebase/firebaseJobs.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss']
})
export class SearchDetailsComponent implements OnInit {

  @Input('job') job;

  constructor( public toastService: ToastService,public jobService: FirebaseJobService) { }

  ngOnInit(): void {

  }

  save() {
    this.jobService.saveJob(this.job).then(result => {
      if(result){
        this.showCustomToast('Saved... ', 2000, 'bg-info color-white');
      }else{
        this.showCustomToast('Opps...', 2000, 'bg-warning color-white');
      }
    });
  }

  apply(uri: string) {
    let index = uri.indexOf('"');
    uri = uri.substring(index + 1, uri.length);
    index = uri.indexOf('"');
    uri = uri.substring(0, index);
    window.open(uri, "_blank");
  }

  showCustomToast(msg, time, color) {
    this.toastService.show(msg, {
      classname: color,
      delay: time,
      autohide: true
    });
  }
}
