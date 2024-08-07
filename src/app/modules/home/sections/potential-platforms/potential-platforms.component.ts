import { Component } from '@angular/core';

@Component({
  selector: 'app-potential-platforms',
  templateUrl: './potential-platforms.component.html',
  styleUrls: ['./potential-platforms.component.scss']
})
export class PotentialPlatformsComponent {

  names:Array<any>=["Amazon","Zid","Amazon","Noon","Salla","Salla","Amazon","Zid","Amazon"]

  logoData: any[] = [];
  logos: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.logoData = logoData;
  }
  calculatePosition(index: number): { top: string, left: string } {
    
    const angle = (index / this.names.length) * 2 * Math.PI;
    const radius = 220;
    const top = 200 + radius * Math.sin(angle) - 16;
    const left = 200 + radius * Math.cos(angle) - 48;
    return { top: `${top}px`, left: `${left}px` };
  }

  
}
export const logoData = [
  { logo: 'salla.svg', name: 'Salla' },
  { logo: 'zid.svg', name: 'Zid' },
  { logo: 'amazon.svg', name: 'Amazon' },
  { logo: 'noon.svg', name: 'Noon' },
  { logo: 'zid.svg', name: 'Zid' },
  { logo: 'salla.svg', name: 'Salla' },
  { logo: 'amazon.svg', name: 'Amazon' },
  { logo: 'salla.svg', name: 'Salla' },
  { logo: 'noon.svg', name: 'Noon' },


]
