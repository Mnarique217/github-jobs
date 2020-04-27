import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase } from 'angularfire2/database'
import { FormControl } from '@angular/forms';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/services/toast/toast.service';


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
  alertMessage="";
  alert=false;
  modal=true;

  constructor(db: AngularFireDatabase,private modalService: NgbModal, public toastService: ToastService, private aFAuth: AngularFireAuth) { 
    this.db = db;
  }
  
  ngOnInit(): void {
  }

  async register(){
    const result = await this.aFAuth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value);
    this.writeUserData(result.user.uid);
  }

  writeUserData(userID): void{
    if(this.formValidation()){
    this.db.object('/users/' + this.username.value ).set({
        id:userID,
        email: this.email.value,
        password: this.password.value,
        address: this.address.value,
        username: this.username.value,
        city: this.city.value,
        state: this.state.value,
        zip : this.zip.value,
        phone : this.phone.value
      });
      this.cleanForm();
      this.showCustomToast('User Registered', 7000, 'bg-success color-white');
      this.modal=false;
    }else{
      this.alertMessage = "Missing fields, please complete the required information";
      this.alert=true;
    }
  }

  showCustomToast(msg, time, color) {
    this.toastService.show(msg, {
      classname: color,
      delay: time,
      autohide: true
    });
  }

  formValidation(){
        return (this.email.value != "" && this.password.value != "" &&this.address.value != ""&&this.username.value!= ""&&this.city.value!= ""&&this.state.value!= ""&&this.zip.value!= ""&&this.phone.value!= "");
  }

  cleanForm(){
    this.email = new FormControl('');
    this.password = new FormControl('');
    this.address = new FormControl('');
    this.username = new FormControl('');
    this.city = new FormControl('');
    this.state = new FormControl('');
    this.zip = new FormControl('');
    this.phone = new FormControl('');
    this.alertMessage="";
    this.alert=false;
  }
}
