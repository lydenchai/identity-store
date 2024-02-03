import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.scss'],
})
export class CheckoutDialogComponent {
  carts: Cart[] = [];

  constructor(
    public dialogRef: MatDialogRef<CheckoutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.carts = [...data];
  }

  onConfirm() {
    this.dialogRef.close(this.data);
  }

  calculateTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.carts) {
      totalPrice += item.price;
    }
    return totalPrice;
  }
}
