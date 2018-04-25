import { Component, OnInit } from '@angular/core';

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
