import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CheckoutDialogComponent } from './components/checkout-dialog/checkout-dialog.component';
import { ProductCardModule } from 'src/app/shares/product-card/product-card.module';
import { CartModule } from 'src/app/shares/cart/cart.module';
@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    CheckoutDialogComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatIconModule,
    MatDialogModule,
    ProductCardModule,
    CartModule,
  ],
})
export class ProductsModule {}
