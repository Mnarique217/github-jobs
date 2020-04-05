import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  title='Software Developer';
  description='Full time, Alameda, CA';
  jobLogoUrl='../../../assets/wind.png';
  constructor() { }

  ngOnInit(): void {
  }

}
