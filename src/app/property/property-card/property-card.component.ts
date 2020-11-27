import { Component } from '@angular/core';

@Component({
  selector: 'app-propertycard',
  templateUrl: 'property-card.component.html',
  // template: `<h1>i m card</h1>`
})
export class PropertyCardComponent {
  Property: any = {
    Id: 1,
    Name: 'Brila House',
    Type: 'House',
    Price: 12000,
  };
}
