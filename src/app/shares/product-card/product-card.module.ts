import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { Routes } from '@angular/router';
import { ProductDetailComponent } from 'src/app/routes/products/components/product-detail/product-detail.component';
const routes: Routes = [
  { path: 'product/:id', component: ProductDetailComponent },
];

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, MatIconModule, TranslateModule],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}
