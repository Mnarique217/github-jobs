import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/services/toast/toast.service';
import { AngularFireDatabase } from '@angular/fire/database';
import {AuthService} from "../../services/firebase/auth.service"

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

  constructor(db: AngularFireDatabase,private modalService: NgbModal, public toastService: ToastService, private aFAuth:AuthService ) { 
    this.db = db;
  }
  
  ngOnInit(): void {
  }

  async register(){
    //const result = await this.aFAuth.createUserWithEmailAndPassword(this.email.value, this.password.value);
    this.aFAuth.SignUp(this.email.value,this.password.value);
    this.writeUserData();
  }

  writeUserData(): void{
    if(this.formValidation()){
      this.aFAuth.SignUp(this.email.value,this.password.value).then(user =>{
        this.cleanForm();
        this.showCustomToast('User Registered', 7000, 'bg-success color-white');
        this.modal=false;
      })
      
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
