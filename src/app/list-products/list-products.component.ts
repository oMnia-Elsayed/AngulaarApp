import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../_model/product';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    if (!this.products) {
      this.products = this.productService.getAll();
    }
    console.log(this.products);
  }

}
