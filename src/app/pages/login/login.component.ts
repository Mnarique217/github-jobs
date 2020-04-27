import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {AuthService} from "../../services/firebase/auth.service"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  password = new FormControl('');
  email = new FormControl('');
  constructor(private aFAuth:AuthService) { 
  }

  ngOnInit(): void {

  }
    
  signIn(): void{
    if(this.formValidation()){
      this.aFAuth.SignIn(this.email.value,this.password.value);
    }
  }

  formValidation(){
    return (this.email.value != "" && this.password.value != "");
}
}
