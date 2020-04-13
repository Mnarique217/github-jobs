import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './copmponents/footer/footer.component';
import { NavbarComponent } from './copmponents/navbar/navbar.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchDetailsComponent } from './copmponents/search-details/search-details.component';
import { SearchItemComponent } from './copmponents/search-item/search-item.component';
import { ImagePipe } from './pipes/image.pipe';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SearchComponent,
    SearchDetailsComponent,
    SearchItemComponent,
    ImagePipe,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }