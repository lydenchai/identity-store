import { LocalStorageService } from './../../../../services/local-storage.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
import { CheckoutComponent } from '../checkout/checkout.component';
import { LocalStorageEnum } from 'src/app/models/enums/local-storage.enum';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: any;
  carts: any[] = [];

  constructor(
    private productService: ProductService,
    private localStorageService: LocalStorageService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });

    // const storedCarts = this.localStorageService.getArray(
    //   LocalStorageEnum.product,
    // );
    // this.carts = storedCarts ? storedCarts : [];
    // console.log(this.carts);
  }

  onAddToCart(product: any) {
    this.carts.push(product);
    // this.localStorageService.setArray(LocalStorageEnum.product, this.carts);
  }

  onRemoveFromCart(index: number) {
    this.carts.splice(index, 1);
    // this.localStorageService.setArray(LocalStorageEnum.product, this.carts);
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
