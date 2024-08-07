import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  channelData = [
    {
      heighlight:'Multi Sales',
      title: 'Channel Management',
      description: 'Manage Inventory Of Your Multiple Sales Channels, and ERP From One Central Point. Now Apply Buffers On  Your Inventory With Real Time Sync',
      imgSrc: 'assets/images/home/channel-integration.png',
      imgAlt: 'Channel Management 1'
    },
    {
      heighlight:'Advance',
      title: 'Inventory Management',
      description: 'Manage the inventory for all your sales channel and ERP from one point and keep them sync in real time to avoid over ordering',
      imgSrc: 'assets/images/home/channel-integration2.png',
      imgAlt: 'Channel Management 2'
    },
    {
      heighlight:'AI Based ',
      title: 'System Automations',
      description: 'Automate Shipping And Fulfilment By Applying Automated Shipping Rules',
      imgSrc: 'assets/images/home/channel-integration3.png',
      imgAlt: 'Channel Management 3'
    },
    {
      heighlight:'40+ Couriers ',
      title: 'Integrations',
      description: 'With PostEx Growth Capital, the payment is simple, transparent, and aligned with your cash flow. ',
      imgSrc: 'assets/images/home/channel-integration4.png',
      imgAlt: 'Channel Management 4'
    },
    {
      heighlight:'Advance Warehouse',
      title: 'Management Solution',
      description: 'With PostEx Growth Capital, the payment is simple, transparent, and aligned with your cash flow.',
      imgSrc: 'assets/images/home/channel-integration.png',
      imgAlt: 'Channel Management 4'
    }
  ];

  selectedChannelIndex = 0;

  ngAfterViewInit() {
    this.initIntersectionObserver();
  }

  setActiveTab(index: number) {
    this.selectedChannelIndex = index;
    this.scrollToChannel(index);
  }

  scrollToChannel(index: number) {
    const element = document.getElementById('channel-' + index);
    if (element) {
      const container = this.scrollContainer.nativeElement;
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      
      // Calculate the scroll position to center the element
      const scrollTop = elementRect.top - containerRect.top + container.scrollTop - (containerRect.height - elementRect.height) / 2;
      const scrollLeft = elementRect.left - containerRect.left + container.scrollLeft - (containerRect.width - elementRect.width) / 2;

      container.scrollTo({
        top: scrollTop,
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }

  private initIntersectionObserver() {
    const options = {
      root: this.scrollContainer.nativeElement,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.id.split('-')[1]);
          this.selectedChannelIndex = index;
        }
      });
    }, options);

    const elements = document.querySelectorAll('[id^="channel-"]');
    elements.forEach(element => observer.observe(element));
  }
}
