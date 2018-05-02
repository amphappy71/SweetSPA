import { Component, OnInit } from '@angular/core';
import { SweetDataService } from '../sweet-data.service';
import { Product } from '../product';

@Component({
  selector: 'app-sweet-product',
  templateUrl: './sweet-product.component.html',
  styleUrls: ['./sweet-product.component.css']
})
export class SweetProductComponent implements OnInit {
  productList: Product[] = [];


  constructor(private data: SweetDataService) { }

  addToCart() {
    console.log('Add logic to add to cart');
  }

  ngOnInit() {
    this.data.getProducts()
    .subscribe(products => {
      this.productList = products;
    });
    console.log('Products pulled for product component');
  }

}
