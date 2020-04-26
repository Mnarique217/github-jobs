import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-jobs-form',
  templateUrl: './search-jobs-form.component.html',
  styleUrls: ['./search-jobs-form.component.sass']
})
export class SearchJobsFormComponent implements OnInit {

  keyword: string = '';
  location: string = '';
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  openSearch() {
    this.router.navigate(['/search'], { queryParams: { key: this.keyword, location: this.location}, queryParamsHandling: 'merge' });
    console.log(this.keyword)
    console.log(this.location)
  }
}
