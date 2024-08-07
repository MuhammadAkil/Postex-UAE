import { Component } from '@angular/core';

@Component({
  selector: 'app-adding-value',
  templateUrl: './adding-value.component.html',
  styleUrls: ['./adding-value.component.scss']
})
export class AddingValueComponent {
  stats = [
    {
      percentage: '80%',
      description: 'Order Lead Time improved',
      percentage2: '45%',
      description2: 'Save in logistics cost'
    },
    {
      percentage: '40%',
      description: 'Reduction in returns',
      percentage2: '72%',
      description2: 'Revenue increase'
    },
    {
      percentage: '92%',
      description: 'Increase in customer satisfaction'
    }
  ];

}
