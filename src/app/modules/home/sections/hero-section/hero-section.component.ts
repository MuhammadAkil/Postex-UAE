
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fadeInRightOnEnterAnimation, fadeInUpOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import Typewriter from 'typewriter-effect/dist/core';
@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  animations: [
    fadeInUpOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 500, translate: '100px' }),
    fadeOutOnLeaveAnimation({ anchor: 'leave', duration: 1000, delay: 300 }),
    fadeInRightOnEnterAnimation({ anchor: 'enterImage', duration: 1000, delay: 100 }),
    fadeInRightOnEnterAnimation({ anchor: 'leaveImage', duration: 1000, delay: 100 }),
  ]
})
export class HeroSectionComponent implements OnInit {
  // text:string='';
  index = 0;
  contextImage: string = "";
  observer: any;
  elemntToObserve: ChildNode | undefined

  contextList: Array<{ text: string, image: string }> = [
    { text: "Ecommerce operations", image: "assets/images/home/home.png" },
    { text: "Ecommerce operations ", image: "assets/images/home/home.png" },
    { text: "Ecommerce operations", image: "assets/images/home/home.png" },
  ]
  typewriter: any;

  constructor() {

  }
  ngOnInit(): void {
    this.changeText();
  }

  changeText() {
    if (this.typewriter == undefined) {
      var target = document.getElementById('changeText');
      this.typewriter = new Typewriter(target, {
        loop: true, delay: 70, skipAddStyles: false, onRemoveNode: ($event: any) => {
          if ($event.character == this.contextList[this.index].text[0]) {
            this.index = (this.index + 1) % this.contextList.length;
            this.contextImage = "";
            setTimeout(() => {
              this.contextImage = this.contextList[this.index].image;
            }, 200)
          }
          return $event
      } });
    }

    this.contextImage = this.contextList[this.index].image;
    this.typewriter
      .typeString(this.contextList[0].text)
      .pauseFor(2000)
      .deleteAll(100)
      .typeString(this.contextList[1].text)
      .pauseFor(2000)
      .deleteAll(100)
      .typeString(this.contextList[2].text)
      .pauseFor(2000)
      .deleteAll(100)
      .start();

  }

}
