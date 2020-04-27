import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { JobsService } from 'src/app/Services/github/jobs.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ActivatedRoute } from '@angular/router';

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
  fulltimeonly = false;
  page = 1;


  constructor(private modalService: NgbModal, public jobsService: JobsService, public toastService: ToastService, private route: ActivatedRoute) { }

  search() {
    this.loading = true;
    let options = this.jobsService.getOptions();

    options.description = this.description;
    options.search = this.keywords;
    options.location = this.location;
    options.full_time = this.fulltimeonly;

    this.jobsService.filter(options).then(response => {
      this.loading = false;
      this.jobs = [];
      this.jobs = response;
      this.showCustomToast('Processed correctly', 2000, 'bg-success color-white');
    });
  }


  next() {
    this.page += 1;
    this.loading = true;
    let options = this.jobsService.getOptions();

    options.page = this.page;
    options.description = this.description;
    options.search = this.keywords;
    options.location = this.location;
    options.full_time = this.fulltimeonly;

    this.jobsService.filter(options).then((response: []) => {
      this.loading = false;

      if (response.length == 0) {
        this.showCustomToast('No more results found', 3000, 'bg-warning color-white');

      } else {
        this.jobs = response;
        this.showCustomToast('Processed correctly', 2000, 'bg-success color-white');
      }


    });
  }

  prev() {
    if (this.page > 1) {
      this.page -= 1;
      this.loading = true;
      let options = this.jobsService.getOptions();

      options.page = this.page;
      options.description = this.description;
      options.search = this.keywords;
      options.location = this.location;
      options.full_time = this.fulltimeonly;

      this.jobsService.filter(options).then(response => {
        this.loading = false;
        this.jobs = [];
        this.jobs = response;
        this.showCustomToast('Processed correctly', 2000, 'bg-success color-white');
      });
    } else {
      this.showCustomToast('Page (1) already', 2000, 'bg-info color-white');
    }
  }

  home() {
    if (this.page != 1) {
      this.page = 1;
      this.loading = true;
      let options = this.jobsService.getOptions();

      options.page = this.page;
      options.description = this.description;
      options.search = this.keywords;
      options.location = this.location;
      options.full_time = this.fulltimeonly;

      this.jobsService.filter(options).then(response => {
        this.loading = false;
        this.jobs = [];
        this.jobs = response;
        this.showCustomToast('Processed correctly ', 2000, 'bg-success color-white');
      });
    } else {
      this.showCustomToast('Page (1) already', 2000, 'bg-info color-white');
    }

  }

  ngOnInit() {
    let options = this.jobsService.getOptions();
    options.page = 1;
    let isParam = false;

    this.route.queryParams

      .subscribe(params => {
        if (params.key != undefined) {
          options.search = params.key;
          this.keywords = params.key;
          isParam = true;
        }
        if (params.location != undefined) {
          options.location = params.location;
          this.location = params.location;
          isParam = true;
        }
      });

    if (isParam) {
      this.jobsService.filter(options).then(response => {
        this.loading = false;
        this.jobs = [];
        this.jobs = response;
        this.showCustomToast('Processed correctly ', 2000, 'bg-success color-white');
      });
    } else {
      this.jobsService.init().then(data => {
        this.loading = false;
        this.jobs = [];
        this.jobs = data;
        this.showCustomToast('Processed correctly ', 2000, 'bg-success color-white');
      });
    }
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


  showCustomToast(msg, time, color) {
    this.toastService.show(msg, {
      classname: color,
      delay: time,
      autohide: true
    });
  }

}
