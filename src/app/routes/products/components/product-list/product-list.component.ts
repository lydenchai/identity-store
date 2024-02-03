import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: Product[] = [];
  carts: Cart[] = [];

  constructor(
    public _dialog: MatDialog,
    private _productService: ProductService,
  ) {}

  ngOnInit(): void {
    this._productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }

  onAddToCart(product: any) {
    this.carts.push(product);
  }

  onRemoveFromCart(index: number) {
    this.carts.splice(index, 1);
  }
}
