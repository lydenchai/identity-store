import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CheckoutComponent } from './components/checkout/checkout.component';
@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatIconModule,
    MatDialogModule,
  ],
})
export class ProductsModule {}
