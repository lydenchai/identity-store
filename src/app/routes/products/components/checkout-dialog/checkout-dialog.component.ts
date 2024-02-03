import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Cart } from 'src/app/models/Cart';
import { LocalStorageEnum } from 'src/app/models/enums/local-storage.enum';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.scss'],
})
export class CheckoutDialogComponent {
  carts: Cart[] = [];
  letterS: boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    public dialogRef: MatDialogRef<CheckoutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.carts = [...data];
    const currentLanguage = this.localStorageService.get(LocalStorageEnum.lang);
    if (currentLanguage === 'en') {
      this.letterS = true;
    } else if (currentLanguage === 'km') {
      this.letterS = false;
    }
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
