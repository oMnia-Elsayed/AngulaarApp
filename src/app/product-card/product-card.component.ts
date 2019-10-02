import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../_model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('Product') product: Product;
  constructor() { }

  ngOnInit() {
  }

}
