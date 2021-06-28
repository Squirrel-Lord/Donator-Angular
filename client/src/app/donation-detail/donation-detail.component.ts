import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation-detail',
  templateUrl: './donation-detail.component.html',
  styleUrls: ['./donation-detail.component.scss']
})
export class DonationDetailComponent implements OnInit {

  public donationContract = 'First Donation'

  constructor() { }

  ngOnInit(): void {
  }

}
