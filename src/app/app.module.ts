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
import { ToastComponent } from './copmponents/toast/toast.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchJobsFormComponent } from './copmponents/search-jobs-form/search-jobs-form.component';
import { SavedJobsComponent } from './pages/saved-jobs/saved-jobs.component';



import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";

/* Services */
import { AuthService } from './services/firebase/auth.service';

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
    ToastComponent,
    ContactComponent,
    SearchJobsFormComponent,
    SavedJobsComponent
  ],
  imports: [
    BrowserModule,    
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule {
currentLocation = null;

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }
 }