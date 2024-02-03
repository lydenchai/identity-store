import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cart } from 'src/app/models/Cart';
import { CheckoutDialogComponent } from 'src/app/routes/products/components/checkout-dialog/checkout-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() carts: Cart[] = [];
  @Output() onRemoveCart = new EventEmitter();

  constructor(public _dialog: MatDialog) {}

  onRemoveFromCart(event: any) {
    this.onRemoveCart.emit(event.value);
  }

  calculateTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.carts) {
      totalPrice += item.price;
    }
    return totalPrice;
  }

  onCheckout(): void {
    const dialogRef = this._dialog.open(CheckoutDialogComponent, {
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
