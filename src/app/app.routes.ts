import {Routes} from '@angular/router';
import {PageNotFoundComponent} from "./routes/page-not-found/page-not-found.component";
import {HomeComponent} from "./routes/home/home.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', component: PageNotFoundComponent},
];
