import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private _location: Location,
    private productService: ProductService,
  ) {
    const product_id = this.route.snapshot.paramMap.get('id');
    this.getProduct(product_id);
  }
  onBack() {
    this._location.back();
  }

  async getProduct(_id: any) {
    try {
      const res: any = await this.productService.getProduct(_id).toPromise();
      if (res) {
        this.product = res;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
