import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import {AuthService} from "../../services/firebase/auth.service"
import { ToastService } from 'src/app/services/toast/toast.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  password = new FormControl('');
  email = new FormControl('');
  @Output() logged = new EventEmitter();

  constructor(private aFAuth:AuthService, public toastService: ToastService) { 
  }

  ngOnInit(): void {

  }
    
  signIn(): void{
    if(this.formValidation()){
      this.aFAuth.SignIn(this.email.value,this.password.value).then(res => {
        console.log('Successfully signed in!');
        this.showCustomToast('Welcome ' + this.email.value, 7000, 'bg-success color-white');
        this.logged.emit(null);
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
        this.showCustomToast('User not found', 7000, 'bg-danger color-white');
      });
    }
  }

  formValidation(){
    return (this.email.value != "" && this.password.value != "");
  }
  
  showCustomToast(msg, time, color) {
    this.toastService.show(msg, {
      classname: color,
      delay: time,
      autohide: true
    });
  }
}
