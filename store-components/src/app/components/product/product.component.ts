import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import{Product} from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @Input() product: Product = {
    id:'',
    price:0,
    name:'',
    image:''
  };

  @Output() addedProduct = new EventEmitter<Product>();

  ngOnInit(): void {
  }

  onAddToCart(){
    this.addedProduct.emit(this.product);
  }

}
