import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Worker } from '../worker';
import { Transaction } from '../transaction';
import { Shopper } from '../shopper';
import { SweetProductComponent } from '../sweet-product/sweet-product.component';
import { SweetDataService } from '../sweet-data.service';
import { Router } from '@angular/router';


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
toggleProduct = true;
toggleWorker = true;
toggleTransaction = true;
toggleShopper = true;

  constructor(private data: SweetDataService, private route: Router) { }

  addToCart() {
    // todo
  }

  goBack() {
    this.route.navigate(['adminhome']);
  }

  closeProducts() {
    this.toggleProduct = true;
    this.showProduts = false;
    this.toggleShopper = true;
    this.toggleWorker = true;
    this.toggleTransaction = true;
  }

  closeWorkers() {
    this.toggleWorker = true;
    this.showWorker = false;
    this.toggleProduct = true;
    this.toggleShopper = true;
    this.toggleTransaction = true;
  }

  closeTransactions() {
    this.toggleTransaction = true;
    this.toggleProduct = true;
    this.toggleShopper = true;
    this.toggleWorker = true;
    this.showTransaction = false;
  }

  closeShoppers() {
    this.toggleShopper = true;
    this.toggleProduct = true;
    this.toggleTransaction = true;
    this.toggleWorker = true;
    this.showShopper = false;
  }

  getProducts() {
    this.toggleProduct = true;
    this.showProduts = true;
    this.toggleShopper = false;
    this.toggleWorker = false;
    this.toggleTransaction = false;
    this.data.getProducts()
    .subscribe( products => {
      this.productList = products;
      console.log('Product data from Sweet DataService: ' + this.productList);
    });
  }

  getShoppers() {
    this.toggleShopper = true;
    this.showShopper = true;
    this.toggleTransaction = false;
    this.toggleWorker = false;
    this.toggleProduct = false;
    this.data.getShoppers()
    .subscribe( shoppers => {
      this.shopperList = shoppers;
      console.log('Shopper data from Sweet DataService: ' + this.shopperList);
    });
  }

  getTransactions() {
    this.showTransaction = true;
    this.toggleTransaction = true;
    this.toggleProduct = false;
    this.toggleShopper = false;
    this.toggleWorker = false;
    this.data.getTransactions()
    .subscribe( transactions => {
      this.transactionList = transactions;
      console.log('Transitions data from Sweet DataService: ' + this.transactionList);
    });
  }

  getWorkers() {
    this.showWorker = true;
    this.toggleWorker = true;
    this.toggleProduct = false;
    this.toggleShopper = false;
    this.toggleTransaction = false;
    this.data.getWorkers()
    .subscribe( worker => {
      this.workerList = worker;
      console.log('Worker data from Sweet DataService: ' + this.workerList);
    });
  }


  ngOnInit() {
  }

}
