import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input('title') title = '';
  @Input('type') type = '';
  @Input('location') location = '';
  @Input('company_logo') company_logo = '';
  @Input('apply') applyUri = '';

  constructor() { }

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
