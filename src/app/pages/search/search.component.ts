import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { JobsService } from 'src/app/Services/github/jobs.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  jobs: any;
  loading = true;
  keywords = '';
  description = '';
  location = '';

  constructor(private modalService: NgbModal, public jobsService: JobsService, public toastService: ToastService) { }

  search() {
    this.loading = true;
    let options = this.jobsService.getOptions();

    options.description = this.description;
    options.search = this.keywords;
    options.location = this.location;

    this.jobsService.filter(options).then(response => {
      this.loading = false;
      this.jobs = [];
      this.jobs = response;
      this.showCustomToast('Processed correctly ');
    });
  }


  ngOnInit() {
    this.showCustomToast('Loading...');
    this.jobsService.init().then(data => {
      this.loading = false;
      this.jobs = [];
      this.jobs = data;
      this.showCustomToast('Processed correctly ');
    });
  }

  closeResult: string;

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  showCustomToast(msg) {
    this.toastService.show(msg,  {
      classname: 'bg-info text-light',
      delay: 3000 ,
      autohide: true
    });
  }
  
}
