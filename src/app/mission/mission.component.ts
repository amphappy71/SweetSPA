import { Component, OnInit } from '@angular/core';
import { SweetDataService } from '../sweet-data.service';
import { Worker } from '../../app/worker';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  workerList: Worker[] = [];

  constructor(private data: SweetDataService) { }

addWorker(frm) {
  const newWorker: Worker = {
    email: frm.value.email,
    zip: frm.value.zip,
    firstName: frm.value.firstName,
    lastName: frm.value.lastName
  };
  this.data.addWorker(newWorker)
  .subscribe(worker => {
    console.log(worker);
    this.data.getWorkers();
  });
}

ngOnInit() {
      this.data.getWorkers()
    .subscribe( worker => {
      this.workerList = worker;
      console.log('Worker data from Sweet DataService: ' + this.workerList);
    });
  }
}
