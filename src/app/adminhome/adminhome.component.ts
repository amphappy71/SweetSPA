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
selectedProduct: Product;
selectedShopper: Shopper;
selectedTransaction: Transaction;
selectedWorker: Worker;
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
toggleEditShopper = false;
toggleEditTransaction = false;
toggleEditWorker = false;
toggleEditProduct = false;

  constructor(private data: SweetDataService, private route: Router) { }

  // goBack() {
  //   this.route.navigate(['adminhome']);
  // }

  showEditShopper(shopper) {
    this.toggleEditShopper = true;
    this.selectedShopper = shopper;
  }

  showEditWorker(worker) {
    this.toggleEditWorker = true;
    this.selectedWorker = worker;
  }

  showEditTransaction(transaction) {
    this.toggleEditTransaction = true;
    this.selectedTransaction = transaction;
  }

  showEditProduct(prod) {
    this.toggleEditProduct = true;
    this.selectedProduct = prod;
  }

  togglerEditProduct() {
    this.toggleEditProduct = !this.toggleEditProduct;
  }

  togglerEditWorker() {
    this.toggleEditWorker = !this.toggleEditWorker;
  }

  togglerEditShopper() {
    this.toggleEditShopper = !this.toggleEditShopper;
  }

  togglerEditTransaction() {
    this.toggleEditTransaction = !this.toggleEditTransaction;
  }

  showCreateProduct() {
    this.toggleCreateProduct = true;
    this.showProduts = false;
    this.showWorker = false;
    this.showShopper = false;
    this.showTransaction = false;
    this.toggleShopper = false;
    this.toggleTransaction = false;
    this.toggleWorker = false;
  }

  showCreateWorker() {
    this.toggleCreateWorker = true;
    this.showProduts = false;
    this.showWorker = false;
    this.showShopper = false;
    this.showTransaction = false;
    this.toggleShopper = false;
    this.toggleTransaction = false;
    this.toggleProduct = false;
  }

  showCreateTransaction() {
    this.toggleCreateTransaction = true;
    this.showProduts = false;
    this.showWorker = false;
    this.showShopper = false;
    this.showTransaction = false;
    this.toggleShopper = false;
    this.toggleWorker = false;
    this.toggleProduct = false;
  }

  showCreateShopper() {
    this.toggleCreateShopper = true;
    this.showProduts = false;
    this.showWorker = false;
    this.showShopper = false;
    this.showTransaction = false;
    this.toggleWorker = false;
    this.toggleTransaction = false;
    this.toggleProduct = false;
  }

  hideCreateWorker() {
    this.toggleCreateWorker = false;
    this.toggleShopper = true;
    this.toggleProduct = true;
    this.toggleTransaction = true;
  }

  hideCreateShopper() {
    this.toggleCreateShopper = false;
    this.toggleWorker = true;
    this.toggleProduct = true;
    this.toggleTransaction = true;
  }

  hideCreateProduct() {
    this.toggleCreateProduct = false;
    this.toggleWorker = true;
    this.toggleShopper = true;
    this.toggleTransaction = true;
  }

  hideCreateTransaction() {
    this.toggleCreateTransaction = false;
    this.toggleWorker = true;
    this.toggleShopper = true;
    this.toggleProduct = true;
  }

  showUpdateProduct(product) {
    this.toggleUpdateProduct = true;
    this.showWorker = false;
    this.showTransaction = false;
    this.showShopper = false;
    this.toggleProduct = false;
    this.selectedProduct = product;
  }

  showUpdateWorker(worker) {
    this.toggleUpdateWorker = true;
    this.showProduts = false;
    this.showTransaction = false;
    this.showShopper = false;
    this.toggleWorker = false;
    this.selectedWorker = worker;
  }

  showUpdateTransaction(transaction) {
    this.toggleUpdateTransaction = true;
    this.showWorker = false;
    this.showProduts = false;
    this.showShopper = false;
    this.toggleTransaction = false;
    this.selectedTransaction = transaction;
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
      this.getProducts();
      this.toggleProduct = true;
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
      this.getWorkers();
      this.toggleWorker = true;
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
      this.getShoppers();
      this.toggleShopper = true;
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
      this.getTransactions();
      this.toggleTransaction = true;
    });
  }

  updateProduct(prod) {
    this.toggleProduct = false;
    this.toggleEditProduct = true;
    const newProduct: Product = {
      _id: this.selectedProduct._id,
      name: prod.value.name,
      description: prod.value.description,
      cost: prod.value.cost,
      price: prod.value.price,
      size: prod.value.size,
      color: prod.value.color,
      imageURL: prod.value.imageURL,
      inStock: prod.value.inStock
    };
    this.data.updateProduct(newProduct)
    .subscribe(res => {
      console.log('Original product to be updated:' + res);
      this.getProducts();
      this.toggleEditShopper = false;
    });
  }

  updateWorker(editWorker) {
    const newWorker: Worker = {
      _id: this.selectedWorker._id,
      email: editWorker.value.email,
      zip: editWorker.value.zip,
      firstName: editWorker.value.firstName,
      lastName: editWorker.value.lastName
    };
    this.data.updateWorker(newWorker)
    .subscribe(res => {
      console.log('Original worker to be updated:' + res);
      this.getWorkers();
      this.toggleEditWorker = false;
    });
  }

  updateShopper(editShopper) {
    const newShopper: Shopper = {
      _id: this.selectedShopper._id,
      address1: editShopper.value.address1,
      address2: editShopper.value.address2,
      city: editShopper.value.city,
      email: editShopper.value.email,
      firstName: editShopper.value.firstName,
      lastName: editShopper.value.lastName,
      middleName: editShopper.value.middleName,
      password: editShopper.value.password,
      phone: editShopper.value.phone,
      state: editShopper.value.state,
      zip: editShopper.value.zip
    };
    this.data.updateShopper(newShopper)
    .subscribe(res => {
      console.log('Original Shopper to be updated:' + res);
      this.toggleEditShopper = false;
      this.getShoppers();
    });
  }

  updateTransaction(editTransaction) {
    const newTransaction: Transaction = {
      _id: this.selectedTransaction._id,
      productID: editTransaction.value.productID,
      shopperID: editTransaction.value.shopperID,
      productPrice: editTransaction.value.productPrice,
      saleState: editTransaction.value.saleState,
      taxRate: editTransaction.value.taxRate,
      quantity: editTransaction.value.quantity,
      total: editTransaction.value.total
       };
    this.data.updateTransaction(newTransaction)
    .subscribe(res => {
      console.log('Original Transaction to be updated:' + res);
      this.toggleEditTransaction = false;
      this.getTransactions();
    });
  }

  deleteProduct(id) {
    this.data.deleteProduct(id)
    .subscribe(data => {
      if (data.n === 1) {
        for (let i = 0; i < this.productList.length; i++) {
          if (id === this.productList[i]._id) {
            this.productList.splice(i, 1);
          }
        }
      }
    });
  }

  deleteWorker(id) {
    this.data.deleteWorker(id)
    .subscribe(data => {
      if (data.n === 1) {
        for (let i = 0; i < this.workerList.length; i++) {
          if (id === this.workerList[i]._id) {
            this.workerList.splice(i, 1);
          }
        }
      }
    });
  }

  deleteShopper(id) {
    this.data.deleteShopper(id)
    .subscribe(data => {
      if (data.n === 1) {
        for (let i = 0; i < this.shopperList.length; i++) {
          if (id === this.shopperList[i]._id) {
            this.shopperList.splice(i, 1);
          }
        }
      }
    });
  }

  deleteTransaction(id) {
    this.data.deleteTransaction(id)
    .subscribe(data => {
      if (data.n === 1) {
        for (let i = 0; i < this.transactionList.length; i++) {
          if (id === this.transactionList[i]._id) {
            this.transactionList.splice(i, 1);
          }
        }
      }
    });
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
    this.toggleEditProduct = false;
    this.toggleCreateProduct = false;
    this.toggleUpdateProduct = false;
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
    this.toggleEditShopper = false;
    this.toggleCreateShopper = false;
    this.toggleUpdateShopper = false;
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
    this.toggleEditTransaction = false;
    this.toggleCreateTransaction = false;
    this.toggleUpdateTransaction = false;
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
    this.toggleEditWorker = false;
    this.toggleCreateWorker = false;
    this.toggleUpdateWorker = false;
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
