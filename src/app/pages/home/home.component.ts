import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/firebase/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  isLogged: boolean = true;

  constructor(private aFAuth:AuthService) { }

  ngOnInit(): void {
    this.aFAuth.CurrentUser().then(user =>{
      this.isLogged = user !== null ? false : true;
    })
  }
}
