import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { Product } from '../product';
import { Shopper } from '../shopper';
import { Transaction } from '../transaction';
import { Worker } from '../worker';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {
  familyMemebers: string[] = ['Dad', 'Mom', 'Andrew', 'Todd II'];
  index = 0; // Typescript infers number type per linter.
  toggleUsFlag = true; // Typescript infers boolean type per linter.
  selectedUs: string;
  color: string;
  styleToggleFlag = true;
  currentCSSClass = 'styleRed';
  inputColor = 'red';
  myStyle: {};

  // add properties for rjxs samples

  adminList: Admin[] = [];    // adminList is an array or Admin objects
  productList: Product[] = [];
  shopperList: Shopper[] = [];
  transactionList: Transaction[] = [];
  workerList: Worker[] = [];

  getAdmins() {
  // Todo after dataservice
  }


  setCSSClass() {
    if (this.currentCSSClass === 'styleRed') {
      this.currentCSSClass = 'styleWhite';
    } else {
      this.currentCSSClass = 'styleRed';
    }
    console.log(this.currentCSSClass);
  }

  setStyle() {
    this.myStyle = {
      'font-weight': this.styleToggleFlag ? 'bold' : 'normal',
      'font-size' :  this.styleToggleFlag ? '64px' : '24px',
      'color' : this.generateRandomColor()
    };
    this.styleToggleFlag = !this.styleToggleFlag;
  }

  generateRandomColor() {
    this.color = '#';
    const letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    for (let i = 0; i < 6; i++) {
      this.color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(this.color);
    return this.color;
  }

  selectUs(us) {
    this.selectedUs = us;
    console.log(us);
  }

  toggleMember() {
    this.toggleUsFlag = !this.toggleUsFlag;
  }

  constructor() { }

  ngOnInit() {
  }

}
