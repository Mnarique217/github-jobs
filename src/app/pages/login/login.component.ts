import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  password = new FormControl('');
  username = new FormControl('');
  constructor() { 
  }

  ngOnInit(): void {

  }
    
}
