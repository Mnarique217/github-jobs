import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/firebase/auth.service';
import { FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean = false;
  currentUser: string = 'Sign In';
  constructor(public firebaseAuth : AuthService) { }

  ngOnInit(): void {
    this.checkLogin();
  }
  checkLogin(){
    this.firebaseAuth.CurrentUser().then((user: firebase.User) =>{
      if(user != null){
        this.isLogged = true;
        this.currentUser = user.email;
      }
    })
  }
  signOut(){
    this.firebaseAuth.SignOut().then(response=>{
        this.isLogged = false;
        this.currentUser = 'Sign In';
    })
  }
  
}
