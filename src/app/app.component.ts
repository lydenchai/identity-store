import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products: any;
  carts: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((response) => {
      this.products = response;
      console.log(this.products);
    });
  }

  onAddToCart(product: any) {
    this.carts.push(product);
  }

  onRemoveFromCart(index: number) {
    this.carts.splice(index, 1);
  }

  calculateTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.carts) {
      totalPrice += item.price;
    }
    return totalPrice;
  }
}
