import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { JobsService } from 'src/app/Services/github/jobs.service';

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

  constructor(private modalService: NgbModal, public jobsService: JobsService) { }

  search() {
    this.loading = true;
    let options = this.jobsService.getOptions();

    options.description = this.description;
    options.search = this.keywords;
    options.location = this.location;

    this.jobsService.filter(options).then(response=>{
      this.loading = false;
      this.jobs = [];
      this.jobs = response;
    });
  }


  ngOnInit() {
    this.jobsService.init().then(data => {
      this.loading = false;
      this.jobs = [];
      this.jobs = data;
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

}
