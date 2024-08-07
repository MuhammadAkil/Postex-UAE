import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  mobileModal: boolean = false;
  currentIndex:number=0;
  currentId:any;
  pageRouting: Array<{ title: string, link: string,id:number }> = [
    { title: "Products", link: "/products",id:0 },
    { title: "About Us", link: "/",id:1 },
    // { title: "Payment Gateway", link: "/payment-gateway" },

    // { title: "Business Account", link: "/business-account",id:1 },
    // { title: "Financing", link: "/finance",id:2 },
  ]
  url: string = "";
  constructor(private router: Router ) {
    this.url = window.location.pathname;
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.router.events.subscribe((val) => {
        if (val instanceof NavigationEnd) {
          this.url = val.url;
          // this.showModal()
        }
      })
    }, 2000)
  }
  changeId(id:number){
   
    this.currentId=id;
    
  }
  ngOnInit(): void {
  }

  showModal() {
    this.mobileModal = !this.mobileModal
  }
  setActiveIndex(index: number) {
    this.currentIndex = index;
  }
}
