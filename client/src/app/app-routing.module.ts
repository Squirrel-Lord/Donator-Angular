import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationDetailComponent } from './donation-detail/donation-detail.component';
import { HomeComponent } from './home/home.component';
import { MakeDonationComponent } from './make-donation/make-donation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'donation-details', component: DonationDetailComponent },
  { path: 'make-donation', component: MakeDonationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
