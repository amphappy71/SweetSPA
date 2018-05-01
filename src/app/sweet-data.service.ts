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
}
