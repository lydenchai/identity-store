import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}
