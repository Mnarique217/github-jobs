import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  email: string = '';
  name: string = '';
  subject: string = '';
  message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendEmail() {
    let url = `mailto:contact@youjob.com?Email=${this.email}&Name=${this.name}&Subject=${this.subject}&Body=${this.name}\n\n${this.message}`;
    window.open(url, "_blank");
  }

}
