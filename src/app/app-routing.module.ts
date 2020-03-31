import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SearchComponent } from './Pages/search/search.component';
import { SearchDetailsComponent } from './Components/search-details/search-details.component';
import { SearchItemComponent } from './Components/search-item/search-item.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: '', component: SearchDetailsComponent },
  { path: 'item', component: SearchItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
