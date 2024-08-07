import { Component } from '@angular/core';

@Component({
  selector: 'app-optimized-data',
  templateUrl: './optimized-data.component.html',
  styleUrls: ['./optimized-data.component.scss']
})
export class OptimizedDataComponent {

  stats = [
    {
      link: '',
     image: "aggrigator-modal.svg",
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque sapien purus volutpat torquent fusce arcu. Proin nunc condimentum mauris pellentesque congue penatibus.',
      title: 'Aggregator model',
      description2: 'Save in logistics cost'
    },
    {
      link: '',
     image: "oms.svg",
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque sapien purus volutpat torquent fusce arcu. Proin nunc condimentum mauris pellentesque congue penatibus.',
      title: 'Order Management System',

    },
    {
      link: '',
     image: "wms.svg",
     title:'Warehouse Management System',
     description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque sapien purus volutpat torquent fusce arcu. Proin nunc condimentum mauris pellentesque congue penatibus.'
    }
  ];
}
