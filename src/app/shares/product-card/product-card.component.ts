import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product?: Product;
  @Output() addToCartChanged = new EventEmitter();

  onAddToCart(event: Event, product: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.addToCartChanged.emit(product);
  }
}
