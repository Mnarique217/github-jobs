import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJobsFormComponent } from './search-jobs-form.component';

describe('SearchJobsFormComponent', () => {
  let component: SearchJobsFormComponent;
  let fixture: ComponentFixture<SearchJobsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchJobsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchJobsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
