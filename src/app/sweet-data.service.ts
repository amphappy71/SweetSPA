import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SweetDataService {

  constructor(private http: Http) { }

  getAdmins() {
    return this.http.get('http://localhost:3000/api/admins')
    .map(res => res.json());
  }


  getProducts() {
  return this.http.get('http://localhost:3000/api/products')
  .map(res => res.json());
}


  getShoppers() {
  return this.http.get('http://localhost:3000/api/shoppers')
  .map(res => res.json());
}

  getTransactions() {
  return this.http.get('http://localhost:3000/api/transactions')
  .map(res => res.json());
}

  getWorkers() {
  return this.http.get('http://localhost:3000/api/workers')
  .map(res => res.json());
}

  addAdmin(newAdmin) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/admin', newAdmin, { headers: headers})
    .map(res => res.json());
  }

  addProduct(newProduct) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/product', newProduct, { headers: headers})
    .map(res => res.json());
  }

  addShopper(newShopper) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/shopper', newShopper, { headers: headers})
    .map(res => res.json());
  }

  addTransaction(newTransaction) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/transaction', newTransaction, { headers: headers})
    .map(res => res.json());
  }

  addWorker(newWorker) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/worker', newWorker, { headers: headers})
    .map(res => res.json());
  }

  deleteProduct(id) {
    return this.http.delete('http://localhost:3000/api/product' + id)
    .map(res => res.json());
  }

  deleteWorker(id) {
    return this.http.delete('http://localhost:3000/api/worker' + id)
    .map(res => res.json());
  }

  deleteTransaction(id) {
    return this.http.delete('http://localhost:3000/api/transaction' + id)
    .map(res => res.json());
  }

  deleteShopper(id) {
    return this.http.delete('http://localhost:3000/api/shopper' + id)
    .map(res => res.json());
  }
}

