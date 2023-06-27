import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/component/home/home.component';
import { ReservationComponent } from './body/component/reservation/reservation.component';
import { AuthentificationComponent } from './body/component/authentification/authentification.component';

const routes: Routes = [
  { path: 'reservation', component:ReservationComponent },
  { path: 'home', component: HomeComponent},
  { path: 'authentification', component: AuthentificationComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
