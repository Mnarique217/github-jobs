import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  users: any[];
  db: AngularFireDatabase;
  email = new FormControl('');
  password = new FormControl('');
  address = new FormControl('');
  username = new FormControl('');
  city = new FormControl('');
  state = new FormControl('');
  zip = new FormControl('');
  phone = new FormControl('');
  
  constructor(db: AngularFireDatabase) { 
    this.db = db;
  }
  
  ngOnInit(): void {
  }

  writeUserData(): void{
    this.db.object('/users/' + this.username.value ).set({
      email: this.email.value,
      password: this.password.value,
      address: this.address.value,
      username: this.username.value,
      city: this.city.value,
      state: this.state.value,
      zip : this.zip.value,
      phone : this.phone.value
    });
  }


}
