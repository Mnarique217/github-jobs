import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FirebaseJobService } from 'src/app/Services/firebase/firebaseJobs.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.sass']
})
export class SearchItemComponent implements OnInit {

  @Input('apply') applyUri = '';
  @Input('job') job;
  @Input('type') type = ''; //types: savedJob, listJobItem

  constructor(private modalService: NgbModal, public db : FirebaseJobService) {}

  ngOnInit(): void {
  }

  closeResult: string;

  removeItem(id){
    if(this.type === "savedJob"){
      //TODO: Delete the job in firebase
      this.db.
    }
  }
  open(content) {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title',size: 'lg' }).result.then((result) => {
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
  apply(uri: string) {
    let index = uri.indexOf('"');
    uri = uri.substring(index+1, uri.length);
    index = uri.indexOf('"');
    uri = uri.substring(0,index);
    window.open(uri, "_blank");
  }
}
