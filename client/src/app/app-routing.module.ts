import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationDetailComponent } from './donation-detail/donation-detail.component';
import { HelpComponent } from './help/help.component';
import { MakeDonationComponent } from './make-donation/make-donation.component';
import { ReceiverComponent } from './receiver/receiver.component';

const routes: Routes = [
  { path: 'donation-details', component: DonationDetailComponent },
  { path: 'make-donation', component: MakeDonationComponent },
  { path: 'receiver', component: ReceiverComponent },
  { path: 'help', component: HelpComponent },
  { path: '', redirectTo: '/donation-details', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
