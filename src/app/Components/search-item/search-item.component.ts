import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input('title') title= '';
  @Input('type') type= '';
  @Input('location') location= '';
  @Input('company_logo') company_logo= '';

  constructor() { }

  ngOnInit(): void {
  }

}
