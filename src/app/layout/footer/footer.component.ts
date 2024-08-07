import { Component, OnInit } from '@angular/core';
// import { fadeInUpOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  // animations: [
  //   fadeInUpOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 1000, translate: '100px' }),
  //   fadeOutOnLeaveAnimation({ anchor: 'leave', duration: 1000, delay: 1000 })
  // ]
})
export class FooterComponent implements OnInit {
  fadeInUpOnEnter = 'enter';
  fadeOutOnLeave = 'leave';

  constructor() { }

  ngOnInit(): void {
  }
}
