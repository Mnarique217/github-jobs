import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss']
})
export class SearchDetailsComponent implements OnInit {
 
  @Input('job') job;

  constructor() {}

  ngOnInit(): void {
  }

  apply(uri: string) {
    let index = uri.indexOf('"');
    uri = uri.substring(index+1, uri.length);
    index = uri.indexOf('"');
    uri = uri.substring(0,index);
    window.open(uri, "_blank");
  }

}
