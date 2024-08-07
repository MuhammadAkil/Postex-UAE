import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trusted-clients',
  templateUrl: './trusted-clients.component.html',
  styleUrls: ['./trusted-clients.component.scss']
})
export class TrustedClientsComponent implements OnInit {
  logoData: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.logoData = logoData;
  }

}
export const logoData = [
  { img: 'MSA_Capital.png' },
  { img: 'rtp-icon.png' },
  { img: 'GFC_Logo.png' },
  { img: 'zayn.png' },
  { img: 'ventour.png' },
  { img: 'shorooq.png' },
  { img: 'FJ-labs.png' },
  { img: 'dash.svg' },
]