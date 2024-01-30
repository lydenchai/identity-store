import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: any;
  carts: any[] = [];
  productsSelected: any[] = [];

  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
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

  onCheckout(): void {
    const dialogRef = this.dialog.open(CheckoutComponent, {
      panelClass: [
        'animate__animated',
        'animate__slideInUp',
        'animate__faster',
        'custom',
      ],
      width: '500px',
      data: this.carts,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.carts = [];
      }
    });
  }
}
