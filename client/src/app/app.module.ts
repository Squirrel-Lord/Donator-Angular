import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonationDetailComponent } from './donation-detail/donation-detail.component';
import { HomeComponent } from './home/home.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MakeDonationComponent } from './make-donation/make-donation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { HelpComponent } from './help/help.component';
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [
    AppComponent,
    DonationDetailComponent,
    HomeComponent,
    MakeDonationComponent,
    NavbarComponent,
    ReceiverComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCollapseModule,
    MdbTabsModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
