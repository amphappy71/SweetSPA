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
toggleCreateShopper = false;
toggleCreateTransaction = false;
toggleCreateWorker = false;
toggleCreateProduct = false;
toggleUpdateShopper = false;
toggleUpdateTransaction = false;
toggleUpdateWorker = false;
toggleUpdateProduct = false;
toggleDeleteShopper = false;
toggleDeleteTransaction = false;
toggleDeleteWorker = false;
toggleDeleteProduct = false;

  constructor(private data: SweetDataService, private route: Router) { }

  // goBack() {
  //   this.route.navigate(['adminhome']);
  // }

  showCreateProduct() {
    this.toggleCreateProduct = true;
  }

  showCreateWorker() {
    this.toggleCreateWorker = true;
  }

  showCreateTransaction() {
    this.toggleCreateTransaction = true;
  }

  showCreateShopper() {
    this.toggleCreateShopper = true;
  }

  hideCreateWorker() {
    this.toggleCreateWorker = false;
  }

  hideCreateShopper() {
    this.toggleCreateShopper = false;
  }

  hideCreateProduct() {
    this.toggleCreateProduct = false;
  }

  hideCreateTransaction() {
    this.toggleCreateTransaction = false;
  }

  showUpdateProduct() {
    this.toggleUpdateProduct = true;
  }

  showUpdateWorker() {
    this.toggleUpdateWorker = true;
  }

  showUpdateTransaction() {
    this.toggleUpdateTransaction = true;
  }

  showUpdateShopper() {
    this.toggleUpdateShopper = true;
  }

  showDeleteProduct() {
    this.toggleDeleteProduct = true;
  }

  showDeleteWorker() {
    this.toggleDeleteWorker = true;
  }

  showDeleteTransaction() {
    this.toggleDeleteTransaction = true;
  }

  showDeleteShopper() {
    this.toggleDeleteShopper = true;
  }

  createProduct(product) {
    const newProduct: Product = {
      name: product.value.name,
      description: product.value.description,
      cost: product.value.cost,
      price: product.value.price,
      size: product.value.size,
      color: product.value.color,
      imageURL: product.value.imageURL,
      inStock: product.value.inStock
    };
    this.data.addProduct(newProduct)
    .subscribe(prod => {
      console.log(prod);
      this.toggleCreateProduct = false;
    });
  }

  createWorker(worker) {
    const newWorker: Worker = {
      email: worker.value.email,
      zip: worker.value.zip,
      firstName: worker.value.firstName,
      lastName: worker.value.lastName
    };
    this.data.addWorker(newWorker)
    .subscribe(work => {
      console.log(work);
      this.toggleCreateWorker = false;
    });
  }

  createShopper(shopper) {
    const newShopper: Shopper = {
      address1: shopper.value.address1,
      address2: shopper.value.address2,
      city: shopper.value.city,
      email: shopper.value.email,
      firstName: shopper.value.firstName,
      lastName: shopper.value.lastName,
      middleName: shopper.value.middleName,
      password: shopper.value.password,
      phone: shopper.value.phone,
      state: shopper.value.state,
      zip: shopper.value.zip
    };
    this.data.addShopper(newShopper)
    .subscribe(shop => {
      console.log(shop);
      this.toggleCreateShopper = false;
    });
  }

  createTransaction(transaction) {
    const newTransaction: Transaction = {
      productID: transaction.value.productID,
      shopperID: transaction.value.shopperID,
      productPrice: transaction.value.productPrice,
      saleState: transaction.value.saleState,
      taxRate: transaction.value.taxRate,
      quantity: transaction.value.quantity,
      total: transaction.value.total
       };
    this.data.addTransaction(newTransaction)
    .subscribe(trans => {
      console.log(trans);
      this.toggleCreateTransaction = false;
    });
  }

  updateProduct() {}

  updateWorker() {}

  updateShopper() {}

  updateTransaction() {}

  deleteProduct() {}

  deleteWorker() {}

  deleteShopper() {}

  deleteTransaction() {}

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
