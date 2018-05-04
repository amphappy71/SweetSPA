import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Worker } from '../worker';
import { Transaction } from '../transaction';
import { Shopper } from '../shopper';
import { SweetProductComponent } from '../sweet-product/sweet-product.component';
import { SweetDataService } from '../sweet-data.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
productList: Product[] = [];
workerList: Worker[] = [];
transactionList: Transaction[] = [];
shopperList: Shopper[] = [];
showProduts = false;
showWorker = false;
showTransaction = false;
showShopper = false;

  constructor(private data: SweetDataService) { }

  getProducts() {
    this.showProduts = true;
    this.data.getProducts()
    .subscribe( products => {
      this.productList = products;
      console.log('Product data from Sweet DataService: ' + this.productList);
    });
  }

  getShoppers() {
    this.showShopper = true;
    this.data.getShoppers()
    .subscribe( shoppers => {
      this.shopperList = shoppers;
      console.log('Shopper data from Sweet DataService: ' + this.shopperList);
    });
  }

  getTransactions() {
    this.showShopper = true;
    this.data.getTransactions()
    .subscribe( transactions => {
      this.transactionList = transactions;
      console.log('Transitions data from Sweet DataService: ' + this.transactionList);
    });
  }

  getWorkers() {
    this.showWorker = true;
    this.data.getWorkers()
    .subscribe( worker => {
      this.workerList = worker;
      console.log('Worker data from Sweet DataService: ' + this.workerList);
    });
  }


  ngOnInit() {
  }

}
