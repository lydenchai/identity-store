import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, MatIconModule, TranslateModule],
  exports: [CartComponent],
})
export class CartModule {}
